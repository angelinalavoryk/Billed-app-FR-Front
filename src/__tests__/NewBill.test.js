/**
 * @jest-environment jsdom
 */

import { fireEvent, screen } from "@testing-library/dom";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";
import mockStore from "../__mocks__/store";
import { ROUTES, ROUTES_PATH } from "../constants/routes";
import { localStorageMock } from "../__mocks__/localStorage.js";
import userEvent from "@testing-library/user-event";
import router from "../app/Router.js";

jest.mock("../app/store", () => mockStore);


describe("Given I am connected as an employee", () => {
  describe("When I submit a new Bill", () => {
    // Configuration initiale
    const onNavigate = (pathname) => {
      document.body.innerHTML = ROUTES({ pathname });
    };
    beforeEach(() => {
      Object.defineProperty(window, "localStorage", { value: localStorageMock });
      window.localStorage.setItem("user", JSON.stringify({ type: "Employee" }));
    });
    // Test : Vérifie que le bill se sauvegarde
    test("Then must save the bill", async () => {
      const html = NewBillUI();
      document.body.innerHTML = html;
  
      const newBillInit = new NewBill({
        document, 
        onNavigate, 
        store: null, 
        localStorage: window.localStorage,
      });
      const formNewBill = screen.getByTestId("form-new-bill");
      expect(formNewBill).toBeTruthy();
      
      const handleSubmit = jest.fn((e) => newBillInit.handleSubmit(e));
      formNewBill.addEventListener("submit", handleSubmit);
      fireEvent.submit(formNewBill);
      expect(handleSubmit).toHaveBeenCalled();
    });

    // Test : Vérifie que la nouvelle page de facture est affichée correctement
    test("Then show the new bill page", async () => {
      localStorage.setItem("user", JSON.stringify({ type: "Employee", email: "a@a" }));
      const root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.append(root);

      router();
      window.onNavigate(ROUTES_PATH.NewBill);
    })

    // Test : Vérifie si un fichier est bien chargé
    test("Then verify the file bill", async () => {
      // Afficher la page NewBill
      const html = NewBillUI();
      document.body.innerHTML = html;

      // Initialiser NewBill et vérifier que le formulaire existe
      const newBillInit = new NewBill({
        document, onNavigate, store: mockStore, localStorage: window.localStorage
      });
      const formNewBill = screen.getByTestId("form-new-bill");
      const billFile = screen.getByTestId('file');
      expect(formNewBill).toBeTruthy();

      // Simuler le chargement d'un fichier et vérifier que handleChangeFile a été appelée
      const file = new File(['image'], 'image.png', {type: 'image/png'});
      const handleChangeFile = jest.fn((e) => newBillInit.handleChangeFile(e));
      billFile.addEventListener("change", handleChangeFile);
      userEvent.upload(billFile, file)
      expect(billFile.files[0].name).toBeDefined();
      expect(handleChangeFile).toBeCalled();

      // Simuler la soumission du formulaire et vérifier que handleSubmit a été appelée
      const handleSubmit = jest.fn((e) => newBillInit.handleSubmit(e));
      formNewBill.addEventListener("submit", handleSubmit);
      fireEvent.submit(formNewBill);
      expect(handleSubmit).toHaveBeenCalled();

      jest.spyOn(mockStore.bills(), "update").mockResolvedValueOnce();
    });
  });
});









// import { screen } from "@testing-library/dom"
// import NewBillUI from "../views/NewBillUI.js"
// import NewBill from "../containers/NewBill.js"


// describe("Given I am connected as an employee", () => {
//   describe("When I am on NewBill Page", () => {
//     test("Then ...", () => {
//       const html = NewBillUI()
//       document.body.innerHTML = html
//       //to-do write assertion
//     })
//   })
// })


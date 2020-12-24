import { createSlice } from "@reduxjs/toolkit";

interface ModalPages {
    isOpen: boolean;
    page1: boolean;
    page2: boolean;
    page3: boolean;
    page4: boolean;
    page5: boolean;
}

const ModalState: ModalPages = {
    isOpen: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
};

const ModalPage = createSlice({
    name: "ModalPage",
    initialState: ModalState,
    reducers: {
        goPage1: (state) => {
            state.page1 = true;
            state.page2 = false;
        },

        goPage2: (state) => {
            state.page2 = true;
            state.page1 = false;
            state.page3 = false;
        },

        goPage3: (state) => {
            state.page3 = true;
            state.page2 = false;
            state.page4 = false;
        },

        goPage4: (state) => {
            state.page4 = true;
            state.page3 = false;
            state.page5 = false;
        },

        goPage5: (state) => {
            state.page5 = true;
            state.page4 = false;
        },
        openModal: (state) => {
            state.isOpen = true;
            state.page1 = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.page1 = false;
            state.page2 = false;
            state.page3 = false;
            state.page4 = false;
            state.page5 = false;
        },
    },
});

export const {
    goPage1,
    goPage2,
    goPage3,
    goPage4,
    goPage5,
    openModal,
    closeModal,
} = ModalPage.actions;

export default ModalPage.reducer;

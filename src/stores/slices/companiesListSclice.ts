import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//creates the company type
interface Company {
  name: string;
  _id: string;
  location: string;
  logoURL: string;
  status: string;
  createdAt?: string;
}
 
//this creaates  the compaanystaate
interface CompaniesState {
  companies: Company[];
  currentCompany: Company | null;
  isLoading: boolean;
  error: string | null;
}

//sets the initial state
const initialState: CompaniesState = {
  companies: [],
  currentCompany: null,
  isLoading: false,
  error: null,
};

//api URL
const API_URL = "http://localhost:8000/api";

// Get all companies
export const getCompanies = createAsyncThunk(
  "companies/getCompanies",
  async () => {
    const response = await axios.get(`${API_URL}/company/all`);
    return response.data.companies;
  }
);

// Add a new company
export const addCompany = createAsyncThunk(
  "companies/addCompany",
  async (companyData: Omit<Company, "_id">) => {
    const response = await axios.post(`${API_URL}/company/new`, companyData);

    return response.data.company;
  }
);

// Delete a company
export const deleteComp = createAsyncThunk(
  "companies/deleteComp",
  async (companyId: string) => {
    await axios.delete(`${API_URL}/company/delete/${companyId}`);
    return companyId;
  }
);

// Update a company
export const updateComp = createAsyncThunk(
  "companies/updateComp",
  async ({ id, data }: { id: string; data: Partial<Company> }) => {
    const response = await axios.put(`${API_URL}/company/update/${id}`, data);
    return response.data.company;
  }
);

// Get company by ID
export const getCompById = createAsyncThunk(
  "companies/getCompById",
  async (companyId: string) => {
    const response = await axios.get(`${API_URL}/company/${companyId}`);
    // console.log("get comp by id");
    // console.log(response.data.company);
    const data = response.data.company;
    console.log("-------");
    console.log(data.createdAt);
    return response.data.company;
  }
);

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    // Clear current company
    clearCurrentCompany: (state) => {
      state.currentCompany = null;
    },
    // Clear error
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Get all companies
      .addCase(getCompanies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companies = action.payload;
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Failed to fetch companies";
      })

      // Add company
      .addCase(addCompany.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companies.push(action.payload); //push into the state of oompanies
      })
      .addCase(addCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Failed to add company";
      })

      // Delete company
      .addCase(deleteComp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteComp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companies = state.companies.filter(
          (company) => company._id !== action.payload //checks and deletes
        );
        // Clear current company if it was deleted
        if (state.currentCompany?._id === action.payload) {
          state.currentCompany = null;
        }
      })
      .addCase(deleteComp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Failed to delete company";
      })

      // Update company
      .addCase(updateComp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateComp.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.companies.findIndex(
          (company) => company._id === action.payload._id
        );
        if (index !== -1) {
          state.companies[index] = action.payload;
        }
        // Update current company if it's the one being updated
        if (state.currentCompany?._id === action.payload._id) {
          state.currentCompany = action.payload;
        }
      })
      .addCase(updateComp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Failed to update company";
      })

      // Get company by ID
      .addCase(getCompById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCompany = action.payload;
      })
      .addCase(getCompById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Failed to fetch company";
      });
  },
});

export const { clearCurrentCompany, clearError } = companiesSlice.actions;
export default companiesSlice.reducer;

export const fetchCompanies = getCompanies;

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";

export const getPertanyaan = createAsyncThunk(
  "pertanyaan/getPertanyaan",
  async () => {
    const response = await axiosInstance.get("/pertanyaan");
    return response.data.data;
  }
);

export const getPertanyaanByid = createAsyncThunk(
  "pertanyaan/getPertanyaanByid",
  async (id) => {
    const response = await axiosInstance.get(`/pertanyaan/${id}`);
    return response.data.data;
  }
);
export const savePertanyaan = createAsyncThunk(
  "pertanyaan/savePertanyaan",
  async ({ pertanyaan, id_quiz, opsiA, opsiB, opsiC, opsiD, jawaban }) => {
    const response = await axiosInstance.post("/pertanyaan", {
      pertanyaan,
      id_quiz,
      opsiA,
      opsiB,
      opsiC,
      opsiD,
      jawaban,
    });
    return response.data.data;
  }
);

export const deletePertanyaan = createAsyncThunk(
  "pertanyaan/deletePertanyaan",
  async (id) => {
    await axiosInstance.delete(`/pertanyaan/${id}`);
    return id;
  }
);

export const editPertanyaan = createAsyncThunk(
  "pertanyaan/editPertanyaan",
  async ({ id, pertanyaan, id_quiz, opsiA, opsiB, opsiC, opsiD, jawaban }) => {
    const response = await axiosInstance.put(`/Pertanyaan/${id}`, {
      pertanyaan,
      id_quiz,
      opsiA,
      opsiB,
      opsiC,
      opsiD,
      jawaban,
    });
    return response.data.data;
  }
);

const PertanyaanEntity = createEntityAdapter({
  selectId: (Pertanyaan) => Pertanyaan.id,
});

const PertanyaanSlice = createSlice({
  name: "Pertanyaan",
  initialState: PertanyaanEntity.getInitialState({
    isLoading: false,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(getPertanyaan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPertanyaan.fulfilled, (state, action) => {
        PertanyaanEntity.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(getPertanyaanByid.fulfilled, (state, action) => {
        PertanyaanEntity.setOne(state, action.payload);
        state.isLoading = false;
      })
      .addCase(savePertanyaan.fulfilled, (state, action) => {
        PertanyaanEntity.addOne(state, action.payload);
      })
      .addCase(deletePertanyaan.fulfilled, (state, action) => {
        PertanyaanEntity.removeOne(state, action.payload);
      })
      .addCase(editPertanyaan.fulfilled, (state, action) => {
        PertanyaanEntity.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
      });
  },
});

export const PertanyaanSelectors = PertanyaanEntity.getSelectors(
  (state) => state.Pertanyaan
);

export const selectIsLoading = (state) => state.Pertanyaan.isLoading;
export default PertanyaanSlice.reducer;

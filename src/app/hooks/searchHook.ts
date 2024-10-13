import { create } from 'zustand';

interface SearchStore {
  productSearch: string;
  setProductSearch: (search: string) => void;

  estoqueSearch: string;
  setEstoqueSearch: (search: string) => void;

  usuarioSearch: string;
  setUsuarioSearch: (search: string) => void;

  materiaPrimaSearch: string;
  setMateriaPrimaSearch: (search: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  productSearch: '',
  setProductSearch: (search) => set({ productSearch: search }),

  estoqueSearch: '',
  setEstoqueSearch: (search) => set({ estoqueSearch: search }),

  usuarioSearch: '',
  setUsuarioSearch: (search) => set({ usuarioSearch: search }),

  materiaPrimaSearch: '',
  setMateriaPrimaSearch: (search) => set({ materiaPrimaSearch: search }),
}));
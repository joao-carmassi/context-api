import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ITexto from '@/interfaces/texto';

interface ContextTypes {
  textos: ITexto[] | null;
  adicionaTexto: (texto: ITexto) => void;
  apagaTexto: (texto: ITexto) => void;
}

const AppContext = createContext<ContextTypes | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [textos, setTextos] = useState<ITexto[] | null>(null);

  useEffect(() => {
    const cookie = Cookies.get('textos');
    setTextos(cookie ? JSON.parse(cookie) : []);
  }, []);

  useEffect(() => {
    Cookies.set('textos', JSON.stringify(textos));
  }, [textos]);

  const adicionaTexto = (texto: ITexto) => {
    setTextos((prev) => [...(prev || []), texto]);
  };

  const apagaTexto = (texto: ITexto) => {
    setTextos((prev) => (prev ? prev.filter((t) => t.id !== texto.id) : []));
  };

  return (
    <AppContext.Provider value={{ textos, adicionaTexto, apagaTexto }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context)
    throw new Error('useAppContext deve ser usado dentro de um Proviver');

  return context;
};

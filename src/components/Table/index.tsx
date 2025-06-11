'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppContext } from '@/Context/AppContext';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';
import ITexto from '@/interfaces/texto';

const TableData = () => {
  const context = useAppContext();
  const textos = context.textos;

  const handleClick = (texto: ITexto) => {
    context.apagaTexto(texto);
  };

  if (textos === null) return null;

  return (
    <section className="w-full p-6 md:p-12">
      {textos.length > 0 ? (
        <div className="bg-card text-card-foreground p-4 rounded-md animate-in fade-in duration-500 fill-mode-both">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Textos</TableHead>
                <TableHead className="font-bold w-40 text-end">Acoes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {textos.map((texto) => (
                <TableRow key={texto.id}>
                  <TableCell>{texto.texto}</TableCell>
                  <TableCell className="text-end">
                    <Button
                      className="ring-destructive"
                      effect="ringHover"
                      variant="destructive"
                      size="sm"
                      onClick={() => handleClick(texto)}
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="mx-auto w-fit text-lg font-bold italic">
          Nenhum texto adicionado até o momento
        </p>
      )}
    </section>
  );
};

export default TableData;

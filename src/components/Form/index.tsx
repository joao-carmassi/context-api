'use client';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useAppContext } from '@/Context/AppContext';
import { ArrowRightIcon } from 'lucide-react';

const Form = () => {
  const [valorInput, setValorInput] = useState('');
  const context = useAppContext();

  const handleClick = () => {
    if (valorInput.trim() !== '') {
      context.adicionaTexto({ texto: valorInput, id: uuidv4() });
      setValorInput('');
    }
  };

  return (
    <section className="flex items-center p-6 md:p-12 w-fit mx-auto">
      <Input
        className="rounded-r-none h-10 w-60"
        type="text"
        placeholder="Digite . . ."
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
      />
      <Button
        onClick={handleClick}
        effect="expandIcon"
        icon={ArrowRightIcon}
        iconPlacement="right"
        className="rounded-l-none ring-primary"
      >
        Enviar
      </Button>
    </section>
  );
};

export default Form;

'use client';

import Form from '@/components/Form';
import TableData from '@/components/Table';
import AppProvider from '@/Context/AppContext';

export default function Home() {
  return (
    <AppProvider>
      <main className="min-h-svh pt-6 md:pt-12 mx-auto max-w-7xl">
        <Form />
        <TableData />
      </main>
    </AppProvider>
  );
}


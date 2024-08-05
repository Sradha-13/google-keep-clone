import React from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import Layout from '../pages/layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <NoteForm />
    </Layout>
  );
};

export default HomePage;

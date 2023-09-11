import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mindmap Website</title>
        <meta name="description" content="A website with mindmap feature" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to the Mindmap Website</h1>
        <p>Explore the mindmap feature by navigating to the mindmap page.</p>
        <Image src="/images/mindmap.png" alt="Mindmap Image" width={500} height={300} />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  // For now, we'll return an empty props object.
  return { props: {} };
}
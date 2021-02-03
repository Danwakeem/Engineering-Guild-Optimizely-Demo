import React from 'react';
import { PageHeader } from 'antd';
import Head from 'next/head'
import styled from 'styled-components';
import { PuppyList } from '../components/PuppyList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Puppy Adoption Agency Ltd.</title>
        <link rel="icon" href="/favicon.ico" />
        <script src={process.env.NEXT_PUBLIC_OPTIMIZELY_SCRIPT} />
      </Head>
      <PageHeader
        ghost={false}
        title="Puppy Adoption Agency"
        subTitle="We will melt your ♥️"
      />
      <Container>
        <PuppyList />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 3rem;
  background: #eee;
`;

import React, { Fragment } from 'react';
// import Navbar from '../components/UI/Navbar';
import Text from '../components/Typography/Text';
import Box from '../components/Box';
import Modal from '../components/UI/Modal';
import Image from '../components/Image';
import Container from '../components/UI/Container';
const doczImage = '../static/images/docz.png';

export default () => (
  <Fragment>
    {/* <Navbar /> */}
    <Text as="h1" content="Hello h1" color="red" />
    <Box color="red">Hello Box</Box>
    <Container>
      <Image src={doczImage} />
      <p>Hello</p>
    </Container>
    <Modal triggerText="Open Modal">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </Modal>
  </Fragment>
);
// getInitialProps can not be used in children components. Only in pages.

// import dynamic from 'next/dynamic'

// const DynamicComponentWithCustomLoading = dynamic(import('../components/hello2'), {
//   loading: () => <p>...</p>
// })

// export default () => (
//   <div>
//     <Header />
//     <DynamicComponentWithCustomLoading />
//     <p>HOME PAGE is here!</p>
//   </div>
// )

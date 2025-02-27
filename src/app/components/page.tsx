import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma'; // Import Prisma client
import Image from 'next/image';

// Define the type for the fetched data
type ImageData = {
  name: string;
  url: string;
};

interface PageProps {
  imageData: ImageData;
}

const Page = ({ imageData }: PageProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{imageData.name}</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Image
          src={imageData.url}
          alt="Fetched image"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Fetch data from the Prisma database connected to Supabase
    const image = await prisma.link.findFirst();

    if (!image) {
      return { notFound: true }; // If no image found
    }

    return {
      props: {
        imageData: {
          name: image.name,
          url: image.url,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        imageData: {
          name: 'Error',
          url: '',
        },
      },
    };
  }
};

export default Page;

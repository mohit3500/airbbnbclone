import client from '../libs/prismadb';

const getListings = async () => {
  try {
    // const {
    //   userId,
    //   roomCount,
    //   guestCount,
    //   bathroomCount,
    //   locationValue,
    //   startDate,
    //   endDate,
    //   category,
    // } = params;
    const listings = await prisma?.listing.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getListings;

import React from 'react';
import getCurrentUser from './actions/getCurrentUser';
import getListings from './actions/getListings';
import ListingCard from './components/listings/ListingCard';
import EmptyState from './components/EmptyState';

const Home = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();
  if (listings?.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings?.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

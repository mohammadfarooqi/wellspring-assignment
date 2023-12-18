import RecentPatientsCard from '../components/RecentPatientsCard';
import UpcomingVisits from '../components/UpcomingVisits';

function Home() {
  return (
    <div className="px-20 pt-24">
      <h1 className="text-3xl font-bold text-grey-600">
        Good afternoon, Meredith!
      </h1>
      <div className="mt-11 grid grid-cols-2 max-w-4xl gap-10">
        <RecentPatientsCard />
        <UpcomingVisits />
      </div>
    </div>
  );
}

export default Home;

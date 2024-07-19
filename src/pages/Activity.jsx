import React, { useState, useEffect } from 'react';
import ActivityDialog from '../components/ActivityDialog';


export const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('id-ID', options).format(new Date(dateString));
  };

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    fetch('https://api.farmstaymanangel.com/api/activity')
      .then(response => response.json())
      .then(data => {
        // Sort the activities by date
        const sortedActivities = data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setActivities(sortedActivities);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (

    <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
    <div className="travigo-container">
      <div className="grid items-center place-items-center text-center mt-36 mb-12 md:mt-28 md:mb-6">
        <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent bg-orange-700 p-2">
        Learning a beautiful culture
        </h1>
        <p className="text-base my-5 text-center sm:text-sm">
        Exploring a culture enriches our understanding and appreciation of diversity, fostering respect and broadening our perspective
        </p>
      </div>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-6">
      {activities.map(activity => (
          <div
            key={activity.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedActivity(activity)}
          >
            <img
              src={`https://api.farmstaymanangel.com/assets/activity/${activity.image}`}
              alt={activity.title}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{activity.title}</h3>
            <div className='line-clamp-4 my-2' dangerouslySetInnerHTML={{ __html: activity.description }}></div>

            <div className="flex justify-between items-center mt-4">
            <div className='flex items-center'>
                <img
                src={`https://api.farmstaymanangel.com/assets/guest/${activity.guest.image}`}
                alt={activity.guest.name}
                className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-lg font-semibold">{activity.guest.name}</h2>
                    <div className="flex items-center mt-1">
                        <img src={activity.guest.country.flags} alt={activity.guest.country.name} className="w-6 h-4 mr-2"/>
                        <span>{activity.guest.country.name}</span>
                    </div>
                </div>
            </div>
              <p className="text-sm text-gray-600 items-center">{formatDate(activity.date)}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedActivity && (
        <ActivityDialog
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
    </div>
  </div>

  );
};

export default Activity;

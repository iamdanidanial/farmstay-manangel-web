import React, { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';
const ActivityDialog = ({ activity, onClose }) => {
    useEffect(() => {
        // Menambahkan kelas ke body saat dialog dibuka
        document.body.classList.add('modal-open');
        return () => {
          // Menghapus kelas dari body saat dialog ditutup
          document.body.classList.remove('modal-open');
        };
      }, []);
  if (!activity) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2">
      <div className="bg-white rounded-lg max-w-5xl w-full h-4/5 overflow-auto p-12 lg:p-2">
      <div className="flex gap-4 justify-between items-start mb-4">
          <h2 className="text-2xl lg:text-xl font-bold">{activity.title}</h2>
          <button className="text-red-500 text-2xl" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className='flex lg:flex-col gap-4'>
            <div className="">
            <img src={`https://api.farmstaymanangel.com/assets/activity/${activity.image}`} alt={activity.title} className="w-full object-cover mb-4" />
            <p className="mt-4"><strong>Date:</strong> {new Date(activity.date).toLocaleDateString()}</p>
            <p className="mt-2"><strong>Type:</strong> {activity.type}</p>
            <p className="mt-2"><strong>Guest:</strong> {activity.guest.name}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: activity.description }}></div>
        </div>


      </div>
    </div>
  );
};

export default ActivityDialog;

const EventCard = ({
  event,
}: {
  event: {
    event_name: string;
    short_description?: string;
    event_link: string;
    hashtags: string[];
    start_date: string;
    end_date: string;
  };
}) => {
  return (
    <a href={event.event_link} target="_blank" rel="noopener noreferrer">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-32 mx-auto object-center" // changed to w-20 for 100px width
          src="https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-events-line-icon-vector-png-image_6626611.png"
          alt={event.event_name}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{event.event_name}</div>
          <p className="text-gray-700 text-base">{event.short_description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {event.hashtags.map((hashtag) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{hashtag}
            </span>
          ))}
        </div>
        <div className="px-6 py-4">
          <p>Start Date: {event.start_date || "no start date"}</p>
          <p>End Date: {event.end_date || "no end date"}</p>
        </div>
      </div>
    </a>
  );
};

export default EventCard;

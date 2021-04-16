

export async function useFetch() {
  let url = `https://next-events-app-default-rtdb.firebaseio.com/events.json`;
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {
    return {
      data: null,
    };
  }
  const fetchedEvents = [];
  for (const key in data) {
    const event = {
      ...data[key],
      _id: key,
    };
    fetchedEvents.push(event);
  }

  return {
    data: fetchedEvents,
  };
}

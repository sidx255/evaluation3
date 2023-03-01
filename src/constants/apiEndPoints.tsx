export const BACKEND_URL = 'http://localhost:8000/';

export const GET_ALL_EVENTS = {
  url: 'api/events',
  method: 'get',
};

export const GET_EVENT = (id: number) => ({
  url: `api/events/${id}`,
  method: 'get',
});

export const UPDATE_EVENT_REGISTRATION = (id: number) => ({
  url: `api/events/${id}`,
  method: 'patch',
});

export const UPDATE_EVENT_BOOKMARK = (id: number) => ({
  url: `api/events/${id}`,
  method: 'patch',
});

export const GET_THEMES = {
  url: 'api/themes',
  method: 'patch',
};

export const SAVE_THEME = (id: number) => ({
  url: `api/themes/${id}`,
  method: 'put',
});
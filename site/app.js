const data = window.TRIP_DATA;
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function mapLink(query, directions = false, text = '') {
  const anchor = element('a', text || (directions ? '現在地から向かう ↗' : '地図を見る ↗'), 'button secondary');
  anchor.href = directions
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}&travelmode=transit`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  return anchor;
}
function actions(query) {
  const box = element('div', '', 'actions');
  box.append(mapLink(query), mapLink(query, true));
  return box;
}
function renderTimeline(id, events) {
  const container = document.getElementById(id);
  events.forEach(event => {
    const card = element('article', '', `stop${event.highlight ? ' highlight' : ''}`);
    const time = element('p', event.time, 'stop-time');
    const content = element('div', '', 'stop-content');
    if (event.status) content.append(element('span', event.status, `label ${event.kind || 'neutral'}`));
    const heading = element('h3');
    const query = event.place ? data.places[event.place].query : event.query;
    if (query) {
      const link = mapLink(query, false, `${event.title} ↗`);
      link.className = 'place-link';
      heading.append(link);
    } else heading.textContent = event.title;
    content.append(heading, element('p', event.description));
    if (query) content.append(actions(query));
    card.append(time, content);
    container.append(card);
  });
}
renderTimeline('timeline1', data.day1);
renderTimeline('timeline2', data.day2);
renderTimeline('castle-timeline', data.castleRoute);
document.querySelectorAll('[data-place]').forEach(anchor => {
  const link = mapLink(data.places[anchor.dataset.place].query);
  anchor.href = link.href;
  anchor.target = link.target;
  anchor.rel = link.rel;
});
document.querySelectorAll('[data-actions]').forEach(box => box.append(...actions(data.places[box.dataset.actions].query).children));
Object.values(data.places).forEach(place => {
  const card = element('article', '', 'card facility');
  if (place.status) card.append(element('span', place.status, `label ${place.kind}`));
  const heading = element('h3');
  const link = mapLink(place.query, false, `${place.name} ↗`);
  link.className = 'place-link';
  heading.append(link);
  card.append(heading, element('p', place.description), actions(place.query));
  document.getElementById('facility-grid').append(card);
});
const announcements = document.getElementById('announcements');
if (!data.announcements.length) announcements.append(element('p', '追加のお知らせはまだありません。集合場所などの詳細は、幹事からの案内をご確認ください。'));
else data.announcements.forEach(item => {
  const article = element('article', '', 'announcement');
  article.append(element('h3', item.title), element('p', item.body));
  announcements.append(article);
});
const contacts = document.getElementById('contacts');
contacts.append(element('h3', '緊急連絡先'));
if (!data.contacts.length) contacts.append(element('p', '連絡先は未掲載です。旅行前に幹事の連絡先を各自で確認してください。'));
else data.contacts.forEach(contact => {
  const item = element('p', `${contact.name}：`);
  if (contact.phone) {
    const phone = element('a', contact.phone, 'phone-link');
    phone.href = `tel:${contact.phone.replace(/[^+0-9]/g, '')}`;
    item.append(phone);
  }
  contacts.append(item);
});

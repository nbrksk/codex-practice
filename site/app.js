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
const meetingIndex = data.day2.findIndex(event => event.time === '14:20');
const commonReturn = data.day2.slice(meetingIndex);
const freeCourse = data.day2.slice(0, meetingIndex);
renderTimeline('free-timeline', freeCourse);
renderTimeline('timeline2', commonReturn);
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

// 一覧表もタイムラインと同じ行程データから生成します。
function renderScheduleTable(title, events, note) {
  const section = element('section', '', 'schedule-table-section');
  const heading = element('h3', title);
  section.append(heading);
  if (note) section.append(element('p', note, 'section-note'));
  const wrapper = element('div', '', 'table-scroll');
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', title + 'の一覧表');
  const table = element('table', '', 'schedule-table');
  table.append(element('caption', title));
  const head = element('thead');
  const headRow = element('tr');
  ['時刻', '場所・予定', '内容'].forEach(text => {
    const cell = element('th', text); cell.scope = 'col'; headRow.append(cell);
  });
  head.append(headRow); table.append(head);
  const body = element('tbody');
  events.forEach(event => {
    const row = element('tr', '', event.highlight ? 'table-highlight' : '');
    const time = element('th', event.time); time.scope = 'row';
    const place = element('td', event.title);
    const detail = element('td', event.description);
    if (event.status === '予約済' || event.kind === 'tentative') detail.append(element('span', event.status, 'label ' + event.kind));
    row.append(time, place, detail); body.append(row);
  });
  table.append(body); wrapper.append(table); section.append(wrapper);
  document.getElementById('schedule-tables').append(section);
}
renderScheduleTable('1日目：12月19日（土）', data.day1);
renderScheduleTable('2日目：12月20日（日）① 姫路城コース（希望者）', data.castleRoute, '朝はホテルで朝食・各自チェックアウト。姫路城見学は希望制で、以下は参考ルートです。');
renderScheduleTable('2日目：12月20日（日）② 自由コース', freeCourse, '明石・姫路周辺で観光、昼食、買い物を各自で楽しみます。');
renderScheduleTable('2日目：全員共通の集合・帰路', commonReturn, 'どちらのコースも14:20に姫路駅集合です。');

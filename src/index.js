const guestForm = document.getElementById('guest-form');
const guestNameInput = document.getElementById('guest-name');
const guestCategorySelect = document.getElementById('guest-category');
const guestList = document.getElementById('guest-list');
const maxGuests = 10;
let guests = [];

guestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (guests.length >= maxGuests) {
    alert(`Guest list is full! Maximum ${maxGuests} guests allowed.`);
    return;
  }

  const name = guestNameInput.value.trim();
  const category = guestCategorySelect.value;
  
  const guest = {
    id: Date.now(),
    name,
    category,
    rsvp: 'Not Attending'
  };

  guests.push(guest);
  renderGuestList();
  guestForm.reset();
});

function renderGuestList() {
  guestList.innerHTML = '';
  guests.forEach(guest => {
    const li = document.createElement('li');
    li.className = `guest-item ${guest.category}`;
    li.innerHTML = `
      <span>${guest.name} (${guest.category})</span>
      <span class="rsvp-status">${guest.rsvp}</span>
      <button class="toggle-rsvp" data-id="${guest.id}">Toggle RSVP</button>
      <button class="remove" data-id="${guest.id}">Remove</button>
    `;
    guestList.appendChild(li);
  });

  document.querySelectorAll('.toggle-rsvp').forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      const guest = guests.find(g => g.id === id);
      if (guest) {
        guest.rsvp = guest.rsvp === 'Attending' ? 'Not Attending' : 'Attending';
        renderGuestList();
      }
    });
  });

  document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      guests = guests.filter(g => g.id !== id);
      renderGuestList();
    });
  });
}

renderGuestList();
// Global objects
let plugin = null;
let container = null;
let whatsappIcon = null;
let confirmContainer = null;
let displayContainer = null;
let labelField = null;

// Global vars
let isLoading = false;

// Execute code on windows load
window.addEventListener(
  'load', 
  (event) => {
    // Set global objects
    plugin = document.getElementById('whatsapp-random-plugin');
    container = document.getElementById('whatsapp-random-container');
    confirmContainer = document.getElementById('whatsapp-random-confirm-container');
    displayContainer = document.getElementById('whatsapp-random-display-container');
    labelField = document.querySelector('#whatsapp-random-display-container .whatsapp-random-text');

    // Toggle container on icon click
    whatsappIcon = document.getElementById('whatsapp-random-icon');
    whatsappIcon.addEventListener(
      'click',
      () => {
        toggleContainer();
      }
    );

    // Confirm cancel button
    document.getElementById('whatsapp-confirm-button-no')
      .addEventListener(
        'click',
        () => {
          toggleContainer();
        }
    );
      
    // Confirm approve button
    document.getElementById('whatsapp-confirm-button-yes')
    .addEventListener(
      'click',
      () => {
        openChat();
      }
    );

  }
);

const toggleContainer = () => {
  let isClosed = container.classList.contains('hidden');
  
  if(isClosed) // Is closed
  {
    // Hide display
    displayContainer.classList.add("hidden");
    // Show confirm
    confirmContainer.classList.remove("hidden");
    // Show container
    container.classList.remove("hidden");
    // Make plugin larger
    plugin.style.width = '300px';
  }
  else // Is opened
  {
    // Close plugin
    if(isLoading === false)
    {
      // Hide display
      displayContainer.classList.add("hidden");
      // Hide confirm
      confirmContainer.classList.add("hidden");
      // Hide container
      container.classList.add("hidden");
      // Make plugin width back smaller
      plugin.style.width = '50px';
    }
  }
};

const openChat = (e) => {

  if((ENDPOINT !== undefined) && (MESSAGE !== undefined))
  {
    isLoading = true;
    whatsappIcon.classList.add('loading');
    
    display('Requesting number...', 220, 0);
    
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then(
      (response) => {
        
        const URL = `${decrypt(response.url)}&text=${encodeURIComponent(MESSAGE)}`;
        let callElement = document.createElement('a');
        callElement.href = URL;
        callElement.target = '_blank';
        callElement.click();
        
        isLoading = false;

        if(decrypt(response.mode) === 'debug')
        {
          console.debug(
            'Contact:', {
              name: decrypt(response.name),
              url: URL
            }
          );
          console.log(`Opening chat with message: ${MESSAGE}`);
        }
        
        // Hide container
        toggleContainer();
      }
      )
      .catch(
        (error) => {
          isLoading = false;
  
          display('Error on getting number', 240, 15);
        }
      )
      .finally(
        () => {
          whatsappIcon.classList.remove('loading');
        }
      );
  }
  else
  {
    display('Error in plugin config', 240, 15);
  }
};

const display = (text, width, delay) => {
  // Hide text
  labelField.classList.add('hidden');
  // Fit plugin width to text length
  plugin.style.width = `${width}px`;
  // Set text value
  labelField.innerHTML = text;
  confirmContainer.classList.add("hidden");
  displayContainer.classList.remove("hidden");
  container.classList.remove("hidden");
  // Wait for text fadein transition
  setTimeout(
    () => {
      // Show faded in text
      labelField.classList.remove('hidden');
    },
    delay
  );
};
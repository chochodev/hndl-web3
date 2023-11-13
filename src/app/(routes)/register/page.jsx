"use client";
import React from 'react';
import '@/styles/routes/register.css';

const Register = () => {
//     // JavaScript code here

//     document.addEventListener('DOMContentLoaded', function () {
//         const myHandles = document.querySelector('.my-handles');
//         const toggleButton = document.getElementById('toggle-my-handles');

//         toggleButton.addEventListener('click', function () {
//             myHandles.classList.toggle('show');
//         });
//     });
    
//     let walletConnected = false;

//     // Function to show the confirmation modal
//     function showConfirmationModal() {
//         const modal = document.getElementById("confirmation-modal");
//         modal.style.display = "block";
//     }

//     // Function to hide the confirmation modal
//     function hideConfirmationModal() {
//         const modal = document.getElementById("confirmation-modal");
//         modal.style.display = "none";
//     }

//     // Function to handle wallet connection and disconnection
//     async function connectWallet() {
//         if (window.ethereum) {
//             try {
//                 if (walletConnected) {
//                     // If already connected, show confirmation modal before disconnecting
//                     showConfirmationModal();
//                 } else {
//                     // Request Metamask to connect
//                     await window.ethereum.request({ method: 'eth_requestAccounts' });

//                     // Check if connected and get the selected address
//                     if (window.ethereum.selectedAddress) {
//                         walletConnected = true;
//                         document.getElementById("connect-wallet-button").textContent = "Wallet Connected";

//                         // Display the connected address with anonymity
//                         const connectedAddress = window.ethereum.selectedAddress;
//                         const connectedAddressElement = document.getElementById("connected-address");
                        
//                         // Show only the first 5 characters, followed by "....." and the last 4 characters
//                         const anonymousAddress = connectedAddress.slice(0, 5) + "..." + connectedAddress.slice(-4);
                        
//                         connectedAddressElement.textContent = `address connected: ${anonymousAddress}`;
//                         connectedAddressElement.style.display = "block";

//                         alert(`Connected to MetaMask with address: ${anonymousAddress}`);
//                         // You can perform further operations with the connected wallet here.
//                     }
//                 }
//             } catch (error) {
//                 console.error('Wallet connection error:', error);
//             }
//         } else {
//             alert('MetaMask not detected. Please install or enable MetaMask extension.');
//         }
//     }

//     // Attach event listener to the "Connect Wallet" button
//     document.getElementById("connect-wallet-button").addEventListener("click", connectWallet);

//     // Attach event listeners to the confirmation modal buttons
//     document.getElementById("confirm-disconnect").addEventListener("click", () => {
//         hideConfirmationModal();
//         // Disconnect the wallet
//         disconnectWallet();
//     });

//     document.getElementById("cancel-disconnect").addEventListener("click", () => {
//         hideConfirmationModal();
//     });

//     // Function to disconnect the wallet
//     function disconnectWallet() {
//         // Perform any necessary wallet disconnection actions here
//         walletConnected = false;
//         document.getElementById("connect-wallet-button").textContent = "Connect Wallet";

//         // Hide the connected address when disconnecting
//         const connectedAddressElement = document.getElementById("connected-address");
//         connectedAddressElement.style.display = "none";

//         alert("Wallet disconnected");
//     }

//     // Attach the connectWallet function to the "Connect Wallet" button
//     document.getElementById("connect-wallet-button").addEventListener("click", connectWallet);

//     // Function to validate input (no changes)
//     function validateInput(input) {
//         return /^[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?(\.[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)?$/.test(input);
//     }

//     // Function to determine if it's a subhandle (no changes)
//     function determineSubhandle(input) {
//         return input.includes('.');
//     }

//     // Function to update character count and rBTC cost
//     function updateCharacterCount() {
//         const handleInput = document.getElementById("handle-input").value;
//         const charCount = document.getElementById("char-count");
//         const handlePreview = document.getElementById("handle-preview-text");
//         const yearsInput = parseInt(document.getElementById("years-input").value, 10);
    
//         const isSubhandle = determineSubhandle(handleInput);
//         const cleanInput = handleInput.split(".")[0];
    
//         let rBTC = 0;
    
//         if (isSubhandle) {
//             if (cleanInput.length === 1) {
//                 rBTC = 0.5;
//             } else if (cleanInput.length === 2) {
//                 rBTC = 0.0125;
//             } else if (cleanInput.length === 3) {
//                 rBTC = 0.0075;
//             } else if (cleanInput.length === 4) {
//                 rBTC = 0.0025;
//             } else if (cleanInput.length >= 5 && cleanInput.length <= 14) {
//                 rBTC = 0.0002;
//             } else {
//                 rBTC = 2.9e-7;
//             }
//         } else {
//             if (cleanInput.length === 1) {
//                 rBTC = 1;
//             } else if (cleanInput.length === 2) {
//                 rBTC = 0.25;
//             } else if (cleanInput.length === 3) {
//                 rBTC = 0.015;
//             } else if (cleanInput.length === 4) {
//                 rBTC = 0.005;
//             } else if (cleanInput.length >= 5 && cleanInput.length <= 14) {
//                 rBTC = 0.0002;
//             } else {
//                 rBTC = 2.9e-7;
//             }
//         }
    
//         const totalRBTC = rBTC * yearsInput;
    
//         charCount.textContent = `${cleanInput.length} = `;
//         const rBTCAmount = document.createElement("span");
//         rBTCAmount.textContent = `${totalRBTC} rBTC`;
//         rBTCAmount.style.color = "green"; // Set the color to green
//         charCount.appendChild(rBTCAmount);
    
//         if (validateInput(handleInput)) {
//             handlePreview.textContent = `${handleInput}.₿`;
//             handlePreview.style.color = "white";
//         } else {
//             handlePreview.textContent = "Invalid input. Please use only lowercase letters, digits, dots, and hyphens, and ensure they are not at the beginning or end of the input.";
//             handlePreview.style.color = "white";
//         }
    
//         placeholderPreview();
//     }

//     // Get the toggle elements using querySelector
// const toggleImage = document.querySelector("#toggle-image");
// const toggleSquare = document.querySelector("#toggle-square");

// // Get the .preview-square element
// const previewSquare = document.querySelector(".preview-square");

// // Add event listeners to the toggle buttons
// toggleImage.addEventListener("change", () => {
//     if (toggleImage.checked) {
//         // Display the image
//         previewSquare.style.backgroundImage = "url('placeholder.png')";
//     }
// });

// toggleSquare.addEventListener("change", () => {
//     if (toggleSquare.checked) {
//         // Display the orange square
//         previewSquare.style.backgroundImage = "none";
//         previewSquare.style.backgroundColor = "#f2a900";
//     }
// });

//    // Function to update button text and enable/disable based on input
//    function placeholderPreview() {
//         const handleInput = document.getElementById("handle-input").value;
//         const button = document.getElementById("manage-handle-button");
//         const handlePreview = document.getElementById("handle-preview-text");
//         const yearsInput = document.getElementById("years-input").value;
//         let isSubhandle = false; // Initialize isSubhandle as false

//         if (yearsInput === "0" || yearsInput.trim() === "" || isNaN(yearsInput)) {
//             button.disabled = true;
//             button.style.backgroundColor = "#ccc";
//             document.querySelector(".years-error").style.display = "block";
//         } else {
//             button.style.backgroundColor = "#007BFF";
//             document.querySelector(".years-error").style.display = "none";
//         }

//         // Check if the handle input contains a dot (.) indicating a subhandle
//         if (handleInput.includes(".")) {
//             isSubhandle = true; // Set isSubhandle to true for subhandles
//             button.textContent = "Register Subhandle";
//         } else {
//             isSubhandle = false;
//             button.textContent = "Register Handle";
//         }

//         // Check if the handle input is not blank and then proceed with validation
//         if (handleInput.trim() !== "") {
//             // Split the input by the dot (.) to handle Punycode decoding for each part separately
//             const parts = handleInput.split(".");
//             const decodedParts = parts.map((part) => {
//                 if (part.startsWith("xn--")) {
//                     try {
//                         // Use punycode library to decode Punycode to Unicode for Punycode parts
//                         return punycode.toUnicode(part);
//                     } catch (error) {
//                         return "Invalid Punycode";
//                     }
//                 } else {
//                     return part;
//                 }
//             });

//             // Join the decoded parts back together with dots and display
//             let decodedHandle = decodedParts[0]; // Initialize with the first part
//             if (parts.length > 1) {
//                 decodedHandle += "." + decodedParts.slice(1).join("."); // Join the remaining parts
//             }

//             // Apply blue color to the text before the dot (.) for subhandles and decode Punycode
//             if (isSubhandle) {
//                 const subhandleIndex = handleInput.indexOf(".");
//                 const subhandleText = handleInput.substring(0, subhandleIndex); // Get the part before the dot
//                 const remainingText = handleInput.substring(subhandleIndex);

//                 const decodedSubhandleText = punycode.toUnicode(decodedParts[0]);
//                 const decodedRemainingText = punycode.toUnicode(decodedParts.slice(1).join(".")); // Join the remaining decoded parts

//                 const decodedSubhandle = `${decodedSubhandleText}.`;

//                 handlePreview.innerHTML = `<span style="color:#0074f2;">${decodedSubhandle}</span>${decodedRemainingText}.₿`;
//             } else {
//                 handlePreview.textContent = `${decodedHandle}.₿`;
//             }

//             // Calculate Unicode character count for sizing (text and Unicode)
//             const textCharacterCount = Array.from(decodedHandle).filter(c => c.length === 1).length;
//             const unicodeCharacterCount = Array.from(decodedHandle).filter(c => c.length > 1).length;

//             // Function to calculate font size with a maximum of 65 pixels and a minimum margin of 50 pixels from the orange square edge
//             function calculateFontSize(textCharCount, unicodeCharCount) {
//                 const minMargin = 80; // Minimum margin in pixels
//                 const maxFontSize = 70; // Maximum font size in pixels
//                 const maxAllowedFontSize = Math.min(
//                     maxFontSize,
//                     Math.min(
//                         (440 - minMargin) / (textCharCount + unicodeCharCount), // square's width
//                         (380 - minMargin) / (textCharCount + unicodeCharCount)  // square's height
//                     )
//                 );
//                 return maxAllowedFontSize + 'px';
//             }

//             // Set font size based on both text and Unicode character counts
//             const fontSize = calculateFontSize(textCharacterCount, unicodeCharacterCount);
//             handlePreview.style.fontSize = fontSize;

//             if (validateInput(handleInput)) {
//                 handlePreview.style.color = "white";
//                 button.disabled = false;
//             } else {
//                 button.textContent = "Register Handle";
//                 handlePreview.textContent = "Invalid input. Please use only lowercase letters, digits, dots, and hyphens, and ensure they are not at the beginning or end of the input.";

//                 // Set a consistent font size for the error message
//                 handlePreview.style.fontSize = "16px";

//                 button.disabled = true;
//                 button.style.backgroundColor = "#ccc";
//                 handlePreview.style.color = "white";
//             }
//         } else {
//             // Handle input is blank, reset the button and error message
//             button.textContent = "Register Handle";
//             button.disabled = true;
//             button.style.backgroundColor = "#ccc";
//             handlePreview.textContent = "";
//         }
//     }

//     // Attach the updateCharacterCount function to the input change event for both inputs
//     document.getElementById("handle-input").addEventListener("input", () => {
//         updateCharacterCount();
//         updateButton();
//     });

//     document.getElementById("years-input").addEventListener("input", () => {
//         updateCharacterCount();
//         updateButton();
//     });

//     function updateLivePreview() {
//         const handleInput = document.getElementById("handle-input").value;
//         const handlePreview = document.getElementById("handle-preview-text");
//         const yearsInput = parseInt(document.getElementById("years-input").value, 10);
//         const isSubhandle = determineSubhandle(handleInput);
//         const cleanInput = handleInput.split(".")[0];
//         const punycodeHandle = punycode.toASCII(cleanInput); // Convert to Punycode
//         const charCount = punycodeHandle.length; // Count characters in Punycode handle

//         let charCountDisplay;

//         if (charCount <= 5) {
//             charCountDisplay = isSubhandle ? "✪".repeat(charCount) : "★".repeat(charCount);
//         } else {
//             charCountDisplay = charCount > 18 ? '18' : charCount.toString();
//         }

//         handlePreview.textContent = `${punycodeHandle}.₿`; // Display Punycode handle
//         handlePreview.style.color = "white";

//         const handleText = document.getElementById("handle-text");
//         if (charCount <= 5) {
//             handleText.innerHTML = charCountDisplay.split('').map(char => `<div>${char}</div>`).join('');
//         } else {
//             handleText.textContent = charCountDisplay;
//         }
//         handleText.style.color = isSubhandle ? "white" : "white";

//         const square = document.getElementById("square");
//         square.style.backgroundColor = isSubhandle ? "#0074f2" : "transparent";

//         placeholderPreview();
//     }

//     // Attach the updateLivePreview function to the input change event for both inputs
//     document.getElementById("handle-input").addEventListener("input", () => {
//         updateCharacterCount();
//         updateLivePreview();
//         updateButton();
//     });

//     document.getElementById("years-input").addEventListener("input", () => {
//         updateCharacterCount();
//         updateButton();
//     });

//     // Function to convert Unicode to Punycode
//     function convertUnicodeToPunycode(input) {
//         const parts = input.split(".");
//         const convertedParts = parts.map((part) => {
//             if (!part.startsWith("xn--")) {
//                 try {
//                     return punycode.toASCII(part);
//                 } catch (error) {
//                     return "Invalid Unicode";
//                 }
//             }
//             return part; // Already in Punycode format
//         });
//         return convertedParts.join(".");
//     }

//     // Function to update the input field with Punycode in real-time
//     function updateInputWithPunycode() {
//         const handleInput = document.getElementById("handle-input");
//         const inputValue = handleInput.value;
//         const convertedValue = convertUnicodeToPunycode(inputValue);
//         handleInput.value = convertedValue;
//     }

//     // Function to register the handle
//     function registerHandle() {
//         const handleInput = document.getElementById("handle-input").value;
//         const yearsInput = document.getElementById("years-input").value;

//         if (validateInput(handleInput)) {
//             const fullHandle = `${handleInput}.₿`;
//             const isSubhandle = determineSubhandle(handleInput);

//             // Determine whether the handle is Punycode
//             const isPunycode = handleInput.includes("xn--");

//             // Format the handle for display
//             let displayHandle;
//             if (isPunycode) {
//                 displayHandle = `(${punycode.toUnicode(handleInput)}.₿) ${fullHandle}`;
//             } else {
//                 displayHandle = fullHandle;
//             }

//             if (isSubhandle) {
//                 alert(`Registering subhandle: ${displayHandle} for ${yearsInput} years`);
//             } else {
//                 alert(`Registering handle: ${displayHandle} for ${yearsInput} years`);
//             }

//             // Add the formatted handle to "My Handles" section
//             const myHandlesList = document.getElementById("my-handles-list");
//             const listItem = document.createElement("li");
//             listItem.textContent = displayHandle;
//             myHandlesList.appendChild(listItem);

//             // Clear the input fields
//             document.getElementById("handle-input").value = "";
//             document.getElementById("years-input").value = "1";
//             document.getElementById("char-count").textContent = "0";

//             // Show a success message
//             alert("Registration successful!");
//         } else {
//             alert("Invalid input. Please use only lowercase letters, digits, dots, and hyphens, and ensure they are not at the beginning or end of the input.");
//         }
//     }

//     // Attach event listeners
//     document.getElementById("handle-input").addEventListener("input", updateInputWithPunycode);
//     document.getElementById("manage-handle-button").addEventListener("click", registerHandle);
    
//      // Function to check the validity of the Registration Years input
//     function checkYearsInputValidity() {
//         const yearsInput = document.getElementById("years-input");
//         const button = document.getElementById("manage-handle-button");

//         if (yearsInput.value === "" || isNaN(yearsInput.value) || parseInt(yearsInput.value, 10) < 1) {
//             button.disabled = true;
//             button.style.backgroundColor = "#ccc";
//             document.querySelector(".years-error").style.display = "block";
//         } else {
//             button.style.backgroundColor = "#007BFF";
//             document.querySelector(".years-error").style.display = "none";
//         }
//     }

//     // Attach the checkYearsInputValidity function to the input change event for the "Registration Years" input
//     document.getElementById("years-input").addEventListener("input", checkYearsInputValidity);

//     // Attach the placeholderPreview function to the input change event for both "Handle" and "Registration Years" inputs
//     document.getElementById("handle-input").addEventListener("input", () => {
//         updateCharacterCount();
//         placeholderPreview();
//     });

//     // Flag to track whether the Bitcoin Address input has been created
//     let bitcoinAddressInputCreated = false;
//     // Flag to track whether the Transfer Handle input has been created
//     let transferHandleInputCreated = false;

//     function updatePreviewOnItemClick(event) {
//         const listItem = event.target;
//         if (listItem.tagName === 'LI') {
//             const handleText = listItem.textContent;

//             // Remove the ".₿" suffix and any dot preceding it
//             let handleWithoutSuffix = handleText.replace(/\.₿$/, '');

//             // Remove Punycode characters and brackets
//             handleWithoutSuffix = handleWithoutSuffix.replace(/[\u2000-\u3300]+/g, ''); // Remove Punycode characters
//             handleWithoutSuffix = handleWithoutSuffix.replace(/\([^)]*\)/g, ''); // Remove brackets and their content

//             // Trim any leading or trailing spaces
//             handleWithoutSuffix = handleWithoutSuffix.trim();

//             const handleInput = document.getElementById("handle-input");
//             handleInput.value = handleWithoutSuffix;

//             // Update the live preview
//             updateCharacterCount();
//             updateLivePreview();

//             // Update the button text based on whether it's a handle or subhandle
//             const button = document.getElementById("manage-handle-button");
//             if (handleWithoutSuffix.includes('.')) {
//                 button.textContent = "Renew Subhandle";
//                 button.style.marginBottom = "20px";
//             } else {
//                 button.textContent = "Renew Handle";
//                 button.style.marginBottom = "20px";
//             }

//             // Create and display the "Set Bitcoin Address" input and confirm button container
//             if (!bitcoinAddressInputCreated) {
//                 createInputAndConfirmButton("bitcoin-address-input", "Set Bitcoin Address");
//                 bitcoinAddressInputCreated = true;
//             }

//             // Create and display the "Transfer Handle" input and confirm button container
//             if (!transferHandleInputCreated) {
//                 createInputAndConfirmButton("transfer-handle-input", "Transfer Handle to Rootstock Address");
//                 transferHandleInputCreated = true;
//             }
//         }
//     }

//     // Function to create an input field and confirm button
//     function createInputAndConfirmButton(inputId, inputPlaceholder) {
//         const input = document.createElement("input");
//         input.type = "text";
//         input.id = inputId;
//         input.placeholder = inputPlaceholder;

//         const confirmButtonContainer = document.createElement("div");
//         confirmButtonContainer.style.display = "flex";

//         const confirmButton = document.createElement("button");
//         confirmButton.textContent = "Confirm";
//         confirmButton.type = "button";
//         confirmButton.style.marginBlockEnd = "10px";
//         confirmButton.style.marginLeft = "10px";

//         // Add event listener to the confirm button for further actions
//         confirmButton.addEventListener("click", function () {
//             const inputValue = input.value;
//             // Handle the input value as needed (e.g., save it, use it for something, etc.)
//             alert(`${inputPlaceholder} set to: ${inputValue}`);
//         });

//         // Add the input and confirm button container to the form container
//         const formContainer = document.querySelector(".form-container");
//         confirmButtonContainer.appendChild(input);
//         confirmButtonContainer.appendChild(confirmButton);
//         formContainer.appendChild(confirmButtonContainer);

//         // Add an event listener to remove the input and confirm button container when Handle input is focused
//         const handleInput = document.getElementById("handle-input");
//         handleInput.addEventListener("focus", function () {
//             formContainer.removeChild(confirmButtonContainer);
//             if (inputId === "bitcoin-address-input") {
//                 bitcoinAddressInputCreated = false;
//             } else if (inputId === "transfer-handle-input") {
//                 transferHandleInputCreated = false;
//             }
//         });
//     }

//    // Function to create the "Inscribe Ordinal" button
//     function createInscribeOrdinalButton() {
//         const inscribeButton = document.createElement("button");
//         inscribeButton.textContent = "Inscribe Ordinal";
//         inscribeButton.style.position = "absolute";
//         inscribeButton.style.right = "0px";
//         inscribeButton.type = "button";
//         inscribeButton.id = "inscribe-button"; // Add an ID to the button
//         inscribeButton.style.display = "none"; // Hide the button initially

//         // Add an event listener to determine when the "Renew Handle" or "Renew Subhandle" button is present
//         document.addEventListener("DOMSubtreeModified", function () {
//             const renewButton = document.getElementById("manage-handle-button");
//             if (renewButton && (renewButton.textContent === "Renew Handle" || renewButton.textContent === "Renew Subhandle")) {
//                 inscribeButton.style.display = "block"; // Display the button when needed
//             } else {
//                 inscribeButton.style.display = "none"; // Hide the button otherwise
//             }
//         });

//         // Add the "Inscribe Ordinal" button to the document body
//         document.body.appendChild(inscribeButton);

//         // Add an event listener to remove the "Inscribe Ordinal" button
//         inscribeButton.addEventListener("click", function () {
//             document.body.removeChild(inscribeButton);
//         });

//         // Find the live preview (orange square) and place the button above it
//         const livePreview = document.getElementById("square");
//         if (livePreview) {
//             livePreview.parentElement.insertBefore(inscribeButton, livePreview);
//         }
//     }

//     // Create the "Inscribe Ordinal" button
//     createInscribeOrdinalButton();

//     // Function to handle the click event on the Handle/Subhandle input
//     function handleInputClick(event) {
//         const button = document.getElementById("manage-handle-button");

//         if (button.textContent === "Renew Handle" || button.textContent === "Renew Subhandle") {
//             // Clear the input value if Renew Handle or Renew Subhandle is present
//             const handleInput = document.getElementById("handle-input");
//             handleInput.value = "";
            
//             // Show the "Inscribe Ordinal" button
//             const inscribeButton = document.getElementById("inscribe-button");
//             if (inscribeButton) {
//                 inscribeButton.style.display = "block";
//             }
//         }

//         // Reset the live preview
//         updateLivePreview();
//     }

//     // Attach the event listener to the Handle/Subhandle input
//     const handleInput = document.getElementById("handle-input");
//     handleInput.addEventListener("click", handleInputClick);

//     // Attach the event listener to the My Handles list
//     const myHandlesList = document.getElementById("my-handles-list");
//     myHandlesList.addEventListener("click", updatePreviewOnItemClick);

//     // Create the "Inscribe Ordinal" button
//     createInscribeOrdinalButton();

//     // Variable to track the state of the "Subhandle Mint" button
//     let subhandleMintButtonOn = false;
//     let subhandleMintButtonCreated = false;

//     // Function to create the "Subhandle Mint" button
//     function createSubhandleMintButton() {
//         const subhandleMintButton = document.createElement("button");
//         subhandleMintButton.textContent = "Subhandle Mint (Off)";
//         subhandleMintButton.type = "button";
//         subhandleMintButton.style.marginRight = "10px";
//         subhandleMintButton.id = "subhandle-mint-button";

//         // Add an event listener to toggle the "Subhandle Mint" button on and off
//         subhandleMintButton.addEventListener("click", function () {
//             if (subhandleMintButtonOn) {
//                 subhandleMintButton.textContent = "Subhandle Mint (Off)";
//             } else {
//                 subhandleMintButton.textContent = "Subhandle Mint (On)";
//             }
//             subhandleMintButtonOn = !subhandleMintButtonOn;
//         });

//         // Add the "Subhandle Mint" button below Transfer Handle Input
//         const transferHandleInput = document.getElementById("transfer-handle-input");
//         transferHandleInput.parentNode.insertBefore(subhandleMintButton, transferHandleInput.nextSibling);
//     }

//     // Function to remove the "Subhandle Mint" button
//     function removeSubhandleMintButton() {
//         const subhandleMintButton = document.getElementById("subhandle-mint-button");
//         if (subhandleMintButton) {
//             subhandleMintButton.parentNode.removeChild(subhandleMintButton);
//             subhandleMintButtonCreated = false;
//         }
//     }

//     // Function to create the "Activate zkERC-6551" button
//     function createActivateButton() {
//         const activateButton = document.createElement("button");
//         activateButton.textContent = "Activate zkERC-6551";
//         activateButton.type = "button";
//         activateButton.id = "activate-button";
//         activateButton.style.display = "none"; // Initially hide the button

//         // Add an event listener to toggle the button on and off
//         activateButton.addEventListener("click", function () {
//             // Your code to handle the "Activate zkERC-6551" button click event
//         });

//         // Add the "Activate zkERC-6551" button to the document body
//         document.body.appendChild(activateButton);
//     }

//     // Create the "Activate zkERC-6551" button
//     createActivateButton();

//    // Function to observe changes in the "Manage Handle" button
//     function observeManageHandleButtonChanges() {
//         const manageHandleButton = document.getElementById("manage-handle-button");
//         if (manageHandleButton) {
//             const observer = new MutationObserver((mutationsList) => {
//                 for (const mutation of mutationsList) {
//                     if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
//                         const buttonText = mutation.addedNodes[0].textContent;
//                         if (buttonText === "Renew Handle") {
//                             // Show the "Subhandle Mint" button
//                             createSubhandleMintButton();
//                             subhandleMintButtonCreated = true;

//                             // Show the "Activate zkERC-6551" button
//                             const activateButton = document.getElementById("activate-button");
//                             if (activateButton) {
//                                 activateButton.style.display = "block";
//                             }
//                         } else if (buttonText === "Renew Subhandle") {
//                             // Hide the "Subhandle Mint" button
//                             removeSubhandleMintButton();

//                             // Show the "Activate zkERC-6551" button
//                             const activateButton = document.getElementById("activate-button");
//                             if (activateButton) {
//                                 activateButton.style.display = "block";
//                             }
//                         } else if (buttonText === "Register Handle" || buttonText === "Register Subhandle") {
//                             // Hide the "Subhandle Mint" button
//                             removeSubhandleMintButton();

//                             // Hide the "Activate zkERC-6551" button
//                             const activateButton = document.getElementById("activate-button");
//                             if (activateButton) {
//                                 activateButton.style.display = "none";
//                             }
//                         }
//                     }
//                 }
//             });

//             const observerConfig = { childList: true };
//             observer.observe(manageHandleButton, observerConfig);
//         }
//     }

//     // Start observing changes in the "Manage Handle" button
//     observeManageHandleButtonChanges();

//         // Define the current date and time
//     const currentDate = new Date('2023-10-20');

//     // Calculate the next 8 halving dates with an 8-year interval (8 years * 365 days/year)
//     const halvingDates = [];
//     for (let i = 0; i < 8; i++) {
//         const nextHalvingDate = new Date(currentDate);
//         nextHalvingDate.setDate(currentDate.getDate() + (i + 1) * 8 * 365);
//         halvingDates.push(nextHalvingDate);
//     }

//     // Function to update the countdown clock
//     function updateClock() {
//         const now = new Date();
//         for (let i = 0; i < halvingDates.length; i++) {
//             if (now < halvingDates[i]) {
//                 const timeRemaining = halvingDates[i] - now;
//                 const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//                 const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//                 const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//                 const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
//                 document.getElementById('clock').innerHTML = `Registration & renewal fees halves<br> every 8 years, for a total of up to 8 cycles.<br><br><b>Next Halving #${i + 1} in: ${days} days ${hours}h ${minutes}m ${seconds}s</b>`;
//                 break;
//             }
//         }
//     }

//     // Initial call to set the clock
//     updateClock();

//     // Update the clock every second
//     setInterval(updateClock, 1000);

//     //AI BOT
//     window.__OORT__CONFIG__ = {
//         agentId: "g5QCbOZt_rPjykhxpLk1f",
//         secretKey: "K4nWPOqH_Ec76Gg16u5Eo"
//         }
  return (
    <>
    <main>
        <h1>HNDL Registrar</h1>
        <div class="toggle-button">
            <label for="toggle-image">Modern</label>
            <input type="radio" name="preview-type" id="toggle-image" checked />
            <label for="toggle-square">Classic</label>
            <input type="radio" name="preview-type" id="toggle-square" />
        </div>
        
        <div class="preview-container">
            <div class="preview-square">
                <div class="handle-text" id="handle-text"></div>
                <p class="handle-preview"><span id="handle-preview-text"></span></p>
                <div id="square"></div>

            </div>
        </div>

        <div class="form-container">
            <label for="handle-input">Your Web3 Handle:</label>
            <input type="text" id="handle-input" placeholder="Handle or Subhandle" maxlength="37" />
            <p class="char-count">Character count: <span id="char-count">0</span></p>
        
            <div class="input-button-container">
                <label for="years-input">Registration Years:</label>
                <input type="number" id="years-input" placeholder="1" value="1" min="1" />
                <p class="years-error"></p>
        
                <button type="button" id="manage-handle-button" disabled>Register Handle</button>
            </div>
        </div>
        <p class="invalid-message" id="error-message"></p>
        
        {/* Connect/Disconnect Wallet Button */}
        <button id="connect-wallet-button">Connect Wallet</button>

        <span id="connected-address"></span>

        {/* Confirmation Modal */}
        <div id="confirmation-modal" class="modal">
            <div class="modal-content">
                <p>Do you want to disconnect your wallet?</p>
                <div>
                    <button id="confirm-disconnect">Yes</button>
                    <button id="cancel-disconnect">No</button>
                </div>
            </div>
        </div>

        <button id="toggle-my-handles">=</button>


         {/* My Handles section */}
        <div class="my-handles">
            <h2></h2>
            <ul id="my-handles-list">
                {/* Handles will be listed here */}
            </ul>
        </div>

        <div id="clock"></div>
    </main>
    </>
  )
}

export default Register
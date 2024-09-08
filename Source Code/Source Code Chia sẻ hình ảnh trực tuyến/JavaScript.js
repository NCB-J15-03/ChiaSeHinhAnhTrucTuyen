const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const thumbnails = document.querySelectorAll(".thumbnail");
const closeModal = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;


thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = thumbnail.src;
        currentIndex = index;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    modalImage.src = thumbnails[currentIndex].src;
});


nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    modalImage.src = thumbnails[currentIndex].src;
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText !== '') {
        const chatBody = document.getElementById('chatBody');

        // Create a new message div
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        messageDiv.innerHTML = `<p>${messageText}</p><span class="timestamp">${new Date().toLocaleTimeString()}</span>`;
        
        // Append the message to the chat body
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        // Clear the input field
        messageInput.value = '';
    }
});

    document.addEventListener('DOMContentLoaded', function () {
        var imageModal = document.getElementById('imageModal');
        imageModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget;
            var imageSrc = button.getAttribute('data-image-src');
            var downloadUrl = button.getAttribute('data-download-url');
            
            var modalImage = imageModal.querySelector('#modalImage');
            var modalDownloadLink = imageModal.querySelector('#modalDownloadLink');

            modalImage.src = imageSrc;
            modalDownloadLink.href = downloadUrl;
        });
    });


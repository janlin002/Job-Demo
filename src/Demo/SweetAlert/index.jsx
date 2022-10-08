import React from 'react'
import Swal from 'sweetalert2'

const SweetAlert = () => {
    const handleClick = () => {
      return Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    };
    return (
      <button type="button" onClick={() => handleClick()}>
        點擊
      </button>
    );
  };

export default SweetAlert
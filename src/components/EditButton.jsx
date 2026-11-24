/*
From Uiverse.io by M4rio1 - https://uiverse.io/M4rio1/short-mule-12
MIT License, Copyright (c) seyed-mohsen-mousavi (SEYED), M4rio1 (Mario Salazar)
*/

function EditButton({ onClick, ariaLabel = "Edit order" }) {
    return (
        <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 delay-75 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 active:scale-95"
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <svg
                className="mr-1 h-5 w-5 self-center"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                ></path>
            </svg>
            Edit
        </button>
    );
}

export default EditButton;

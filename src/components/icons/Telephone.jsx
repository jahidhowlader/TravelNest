import PropTypes from 'prop-types'

const Telephone = ({ className }) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 32 32">
            <g fill="none" fillRule="evenodd">
                <g fill="#5A5A5A" fillRule="nonzero">
                    <g>
                        <g>
                            <g transform="translate(-135 -1400) translate(135 710) translate(0 306) translate(0 384)">
                                <path d="M7.333 32c-1.598 0-2.953-1.127-3.265-2.667H2c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2h2v-.667C4 5.735 5.127 4.38 6.667 4.068V.667c0-.368.298-.667.666-.667C7.701 0 8 .299 8 .667V4h3.333c1.839 0 3.334 1.495 3.334 3.333V8H30c1.103 0 2 .897 2 2v17.333c0 1.103-.897 2-2 2H14.599C14.287 30.873 12.932 32 11.333 32h-4zm0-26.667c-1.102 0-2 .898-2 2v21.334c0 1.102.898 2 2 2h4c1.103 0 2-.898 2-2V7.333c0-1.102-.897-2-2-2h-4zM30 28c.368 0 .667-.299.667-.667V10c0-.368-.299-.667-.667-.667H14.667V28H30zM2 9.333c-.368 0-.667.299-.667.667v17.333c0 .368.299.667.667.667h2V9.333H2z" />
                                <path d="M18 14.667c-.368 0-.667-.299-.667-.667v-2.667c0-.368.299-.666.667-.666h9.333c.368 0 .667.298.667.666V14c0 .368-.299.667-.667.667H18zm8.667-1.334V12h-8v1.333h8z" />
                                <circle cx="18.332" cy="18.333" r="1" />
                                <circle cx="22.667" cy="18.333" r="1" />
                                <circle cx="18.332" cy="21.667" r="1" />
                                <circle cx="22.667" cy="21.667" r="1" />
                                <circle cx="18.332" cy="25" r="1" />
                                <circle cx="27.001" cy="18.333" r="1" />
                                <circle cx="27.001" cy="21.667" r="1" />
                                <circle cx="27.001" cy="25" r="1" />
                                <circle cx="22.667" cy="25" r="1" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    );
};

Telephone.propTypes = {
    className: PropTypes.string.isRequired,
}

export default Telephone;
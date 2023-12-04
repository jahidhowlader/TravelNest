import PropTypes from 'prop-types'

const Balcony = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
            <g fill="none" fillRule="evenodd">
                <g fill="#5A5A5A" fillRule="nonzero">
                    <g>
                        <g>
                            <g>
                                <path d="M2.667 32C1.196 32 0 30.804 0 29.333V2.667C0 1.196 1.196 0 2.667 0h26.666C30.804 0 32 1.196 32 2.667v26.666C32 30.804 30.804 32 29.333 32H2.667zm26.666-1.333c.736 0 1.334-.598 1.334-1.334v-12h-14v13.334h12.666zm-28-1.334c0 .736.599 1.334 1.334 1.334h12.666V17.333h-14v12zM30.667 16V9.333H1.333V16h29.334zm0-8V2.667c0-.735-.598-1.334-1.334-1.334H2.667c-.735 0-1.334.599-1.334 1.334V8h29.334z" transform="translate(-435 -1400) translate(135 710) translate(0 306) translate(300 384)" />
                                <path d="M12.667 25.333c-.368 0-.667-.298-.667-.666V22c0-.368.299-.667.667-.667.368 0 .666.299.666.667v2.667c0 .368-.298.666-.666.666zM19.333 25.333c-.368 0-.666-.298-.666-.666V22c0-.368.298-.667.666-.667.368 0 .667.299.667.667v2.667c0 .368-.299.666-.667.666z" transform="translate(-435 -1400) translate(135 710) translate(0 306) translate(300 384)" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Balcony.propTypes = {
    className: PropTypes.string.isRequired,
}


export default Balcony;
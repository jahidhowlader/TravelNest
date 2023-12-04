import PropTypes from 'prop-types'

const Wifi = ({ className }) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 32 32">
            <g fill="none" fillRule="evenodd">
                <g fill="#5A5A5A" fillRule="nonzero">
                    <g>
                        <g>
                            <g>
                                <path d="M24.288 5.99c-.179 0-.345-.067-.472-.188-3.024-2.903-7.05-4.5-11.34-4.5-4.288 0-8.315 1.598-11.339 4.5-.125.12-.292.187-.47.187-.179 0-.346-.066-.472-.187C.068 5.682 0 5.521 0 5.35c0-.17.07-.331.196-.452C3.472 1.754 7.833.022 12.479.022c4.645 0 9.006 1.732 12.281 4.875.125.12.195.282.195.453 0 .172-.07.332-.195.454-.125.121-.293.185-.472.185z" transform="translate(-434 -1276) translate(135 710) translate(0 306) translate(299 260)" />
                                <path d="M20.913 10.38c-.178 0-.345-.067-.472-.187-2.125-2.04-4.953-3.163-7.965-3.163-1.088 0-2.168.15-3.208.444l-.18.056c-.113.034-.227.068-.339.105l-.133.049-.175.063c-.068.023-.136.047-.202.073-.068.026-.135.055-.203.083l-.163.069-.138.057c-.099.045-.196.093-.295.14l-.2.095c-.137.069-.273.143-.408.219l-.075.04c-.146.081-.289.168-.43.257l-.032.019c-.154.097-.292.19-.43.286l-.033.022c-.161.114-.31.223-.455.337-.141.111-.276.221-.408.335l-.256-.21.223.238c-.13.113-.259.232-.387.352l-.025.023c-.136.131-.303.198-.481.198-.179 0-.346-.067-.472-.187s-.195-.282-.195-.453c0-.172.07-.332.195-.454 2.374-2.28 5.538-3.536 8.906-3.536.604 0 1.214.042 1.811.124.215.03.405.061.597.096l.142.03c.15.029.301.06.45.094.056.013.111.028.167.042l.183.048c.08.02.158.04.237.062.081.023.161.049.243.075l.174.053c.055.017.11.034.163.052.108.035.213.075.32.115l.253.092c.12.046.238.097.356.147l.208.087c.151.067.299.138.446.211l.108.052c.154.078.306.16.458.244l.084.045c.156.088.31.182.463.276l.067.04c.149.095.296.195.442.296l.075.05c.153.108.305.221.453.336l.048.036c.163.127.322.259.478.393.156.134.301.268.444.403l.033.031c.13.124.199.285.199.456 0 .171-.07.331-.195.453-.125.121-.292.19-.47.19zM7.415 14.758c-.179 0-.346-.066-.472-.186-.127-.12-.195-.282-.195-.454 0-.171.07-.331.196-.453 1.476-1.415 3.444-2.195 5.541-2.195 1.562 0 3.068.44 4.36 1.274.306.197.387.595.182.888-.126.178-.332.283-.554.283-.133 0-.261-.037-.372-.109-1.07-.691-2.321-1.056-3.617-1.056-1.741 0-3.375.646-4.599 1.822-.125.12-.292.186-.47.186zM12.47 23.052c-.823-.02-1.583-.341-2.146-.908s-.863-1.31-.843-2.093c.039-1.568 1.348-2.825 2.98-2.862.374 0 .674.28.682.626.009.352-.283.646-.651.654-.92.02-1.657.728-1.68 1.612-.01.441.157.86.475 1.179.317.318.744.5 1.204.51.368.01.658.304.65.656-.008.344-.306.624-.666.624h-.006v.002zM23.333 30.732c-4.778 0-8.666-3.733-8.666-8.32 0-4.588 3.888-8.32 8.666-8.32 4.779 0 8.667 3.732 8.667 8.32 0 4.587-3.888 8.32-8.667 8.32zm0-15.36c-4.044 0-7.333 3.157-7.333 7.04 0 3.882 3.29 7.04 7.333 7.04 4.044 0 7.334-3.158 7.334-7.04 0-3.883-3.29-7.04-7.334-7.04z" transform="translate(-434 -1276) translate(135 710) translate(0 306) translate(299 260)" />
                                <path d="M22.221 26.16c-.362 0-.709-.11-1.001-.322-.063-.046-.12-.093-.175-.146l-2-1.92c-.26-.25-.26-.655 0-.905.126-.12.294-.187.472-.187.179 0 .346.067.472.187l2 1.92.036.03c.058.04.126.064.198.064.016 0 .032-.002.048-.004.092-.013.169-.057.224-.126l3.873-4.956c.125-.16.324-.256.533-.256.146 0 .284.045.4.128.143.103.235.252.26.421.026.17-.02.338-.126.475L23.56 25.52c-.268.343-.66.565-1.101.625-.081.012-.16.017-.239.017z" transform="translate(-434 -1276) translate(135 710) translate(0 306) translate(299 260)" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    );
};

Wifi.propTypes = {
    className: PropTypes.string.isRequired,
}

export default Wifi;
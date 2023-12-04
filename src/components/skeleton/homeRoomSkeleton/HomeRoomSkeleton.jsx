import ContentLoader from 'react-content-loader'

const HomeRoomSkeleton = props => (
    <div className='grid grid-cols-3 gap-8'>
        <ContentLoader speed={2} height={470} width="100%" {...props} backgroundColor='#f6f6fa' >
            <rect x="3" y="3" rx="10" ry="10" width="98%" height="365" />
            <rect x="3" y="380" rx="10" ry="10" width="50%" height="35" />
            <rect x="3" y="425" rx="10" ry="10" width="70%" height="30" />
        </ContentLoader>
        <ContentLoader speed={2} height={470} width="100%" {...props} backgroundColor='#f6f6fa' >
            <rect x="3" y="3" rx="10" ry="10" width="98%" height="365" />
            <rect x="3" y="380" rx="10" ry="10" width="50%" height="35" />
            <rect x="3" y="425" rx="10" ry="10" width="70%" height="30" />
        </ContentLoader>
        <ContentLoader speed={2} height={470} width="100%" {...props} backgroundColor='#f6f6fa' >
            <rect x="3" y="3" rx="10" ry="10" width="98%" height="365" />
            <rect x="3" y="380" rx="10" ry="10" width="50%" height="35" />
            <rect x="3" y="425" rx="10" ry="10" width="70%" height="30" />
        </ContentLoader>
        
    </div>
)

export default HomeRoomSkeleton;
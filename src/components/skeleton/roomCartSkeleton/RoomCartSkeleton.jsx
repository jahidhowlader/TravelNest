import ContentLoader from 'react-content-loader'

const RoomCartSkeleton = props => (
    <>
        <ContentLoader speed={1} height={300} width="100%" {...props} backgroundColor='#f6f6fa' >
            <rect x="3" y="3" rx="10" ry="10" width="98%" height="300" />
        </ContentLoader>
        <ContentLoader speed={1} height={300} width="100%" {...props} backgroundColor='#f6f6fa' >
            <rect x="3" y="3" rx="10" ry="10" width="98%" height="300" />
        </ContentLoader>
        <ContentLoader speed={1} height={320} width="100%" {...props} backgroundColor='#f6f6fa' >
            <rect x="3" y="3" rx="10" ry="10" width="98%" height="300" />
        </ContentLoader>
    </>
)

export default RoomCartSkeleton;
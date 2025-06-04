import { Image } from '@imagekit/react';

const IKImage = ({ src, className, w, h, alt }) => {
    return (
        <Image
            urlEndpoint="https://ik.imagekit.io/ojy4zls8n/"
            src={src}
            className={className}
            loading="lazy"
            alt={alt}
            width={w}
            height={h}
            lqip={{ active: true, quality: 20 }}
            transformation={[
                {
                    width: w,
                    height: h
                },
            ]}
        />
    );
};

export default IKImage;

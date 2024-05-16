import Image from "next/image";
import dog1 from '../../public/images/dog1.png';
import dog2 from '../../public/images/dog2.png';
import dog3 from '../../public/images/dog3.png';
import dog4 from '../../public/images/dog4.png';

const PhotosPage = () => {
    return (
        <div>
            <h1 className="text-2xl mb-8 font-semibold">
                My Photos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-60 overflow-hidden relative">
                    <Image
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover w-full h-full"
                        placeholder="blur"
                        priority={true}
                        quality={50}
                        src={dog1}
                        alt="dog1"
                        fill
                    />
                </div>

                <div className="h-60 overflow-hidden relative">
                    <Image 
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        priority={true}
                        quality={50}
                        src={dog2}
                        alt="dog2"
                        fill
                    />
                </div>

                <div className="h-60 overflow-hidden relative">
                    <Image
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        loading='lazy'
                        quality={50}
                        src={dog3}
                        alt="dog3"
                        fill
                    />
                </div>

                <div className="h-60 overflow-hidden relative">
                    <Image
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        loading='lazy'
                        quality={50}
                        src={dog4}
                        alt="dog4"
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default PhotosPage;

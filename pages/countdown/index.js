import { useRouter } from 'next/router';
import { LaunchCard, PostWidget, Categories, Loader } from '../../components';
import { getLaunches } from "../../services";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Countdown({launches}) {
    const router = useRouter();
    if (router.isFallback) {
        return <Loader/>
    }
    return (
        <div>
            <div className={`${roboto.className} container mx-auto px-10 my-8`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 col-span-1">
                    {launches.slice(0).map((launch, index) => (
                    <LaunchCard key={index} launch={launch.node} />
                    ))}
                    </div>
                    <div className="lg:col-span-4 col-span-1">
                        <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const launches = (await getLaunches()) || [];
    return {
        props: {launches},
    };
}
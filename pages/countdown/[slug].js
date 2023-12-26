import React from 'react';
import { useRouter } from 'next/router';
import { LaunchDetail, Categories, PostWidget, Launcher, Loader} from '../../components';
import { getLaunches, getLaunchDetails } from '@/services';

const CountdownPost = ({launch}) => {
    const router = useRouter();
    if (router.isFallback) {
        return <Loader/>
    }

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <LaunchDetail launch={launch}/>
                    <Launcher launcher={launch.launcher}/>
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountdownPost;


export async function getStaticProps({params}) {
    const data = (await getLaunchDetails(params.slug)) || [];
    return {
        props: {launch: data},
    };
}

export async function getStaticPaths() {
    const launches = await getLaunches();
    return {
        paths: launches.map(({node: {slug}}) => ({params : {slug}})),
        fallback: true
    }
}
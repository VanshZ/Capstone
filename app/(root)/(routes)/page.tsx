'use client';
import { Button } from "@/components/ui/button";
import {  useRouter } from 'next/navigation'
import Container from "@/components/ui/container";

const HomePage = () => {

    const router = useRouter();

    return (
        <Container>
            <div className='flex-col'>
                <div className='flex-1 space-y-4 p-8 pt-6'>
                    <div className='flex items-center justify-center gap-4'>
                        <Button onClick={() => { router.push('/items'); }}>
                            Fetch from Database
                        </Button>
                        <Button onClick={() => { router.push('/webapi'); }}>
                            Fetch from WebAPI
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;
import { Button, Typography } from 'antd'
import { Info } from '../components/Info'
import { useDashboardContext } from '../context/useDashboardContext'

const { Title, Paragraph } = Typography


export const PersonalInfo = (): JSX.Element => {

    

    return (
        <section className='dashboard'>
                <div className='dashboard__title'>
                    <Title>
                        Personal Info
                    </Title>
                    <Paragraph>
                        Basic info, like your name and photo
                    </Paragraph>
                </div>
                <section className='dashboard__content '>
                    <div className='dashboard__edit'>
                        <div className='dashboard__profile'>
                            <Title level={2}>
                                Profile
                            </Title>
                            <Paragraph>
                                Some info may be visible to other people
                            </Paragraph>
                        </div>

                        <Button
                            style={{
                                borderRadius: '10px',
                                paddingInline: '35px',
                            }}
                            size='large'
                        >
                            Edit
                        </Button>
                    </div>
                    <section>
                        <Info
                            type='image'
                            title='Photo'
                            description='https://thispersondoesnotexist.com/image'
                        />
                        <Info
                            type='text'
                            title='Name'
                            description='John Doe'
                        />
                        <Info
                            type='text'
                            title='Bio'
                            description='Soy un desarrollador web'
                        />
                        <Info
                            type='text'
                            title='Phone'
                            description='123456789'
                        />
                        <Info
                            type='text'
                            title='Email'
                            description='email@email.com'
                        />
                        <Info
                            type='password'
                            title='Password'
                            description='John Doe'
                        />
                    </section>
                </section>
            </section>
    )
}

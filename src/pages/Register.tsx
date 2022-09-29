import { Form, Logo } from '../components'
import { Typography, Button,  } from 'antd';
import { Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Password from 'antd/lib/input/Password';

const { Title, Paragraph, Link } = Typography;

export const Register = () => {
  return (
    <section className='register-wrapper'>
        <Form >
            <Logo />
            <div className='register-title'>
                <Title  
                    style={{
                        fontWeight: '600',
                    }}
                >
                    Join thousands of learners from around the world 
                </Title>
                <Paragraph>
                    Master web development by making real-life projects. There are multiple paths for you to choose
                </Paragraph>
            </div>
            <div className='register-inputs'>
                <Input className='input' size="large" placeholder="Email" prefix={<MailOutlined />} />
                <Password className='input' size='large' placeholder='Password' prefix={<LockOutlined />}/>
            </div>
                <Button
                    size='large'
                    type="primary"
                    shape='round'
                >
                    Start coding now
                </Button>
            
            <div className='register-link'>
                <Paragraph>
                    Already have an account? 
                    <Link href='/login'> login</Link>
                </Paragraph>
            </div>
        </Form>
    </section>
  )
}

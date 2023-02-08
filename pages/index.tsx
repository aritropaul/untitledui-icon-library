import getConfig from 'next/config';
import Icon from '@/components/Icon';
import Layout from '@/components/Layout';
import { Icons } from '@/components/Icons';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const getIcons = (list: { [x: string]: any; }) => {
  let content = [];
  var keys = Object.keys(Icons);
  for (let iconName in keys.sort()) {
    content.push(
      <div className='p-4 items-center hover:bg-slate-200 rounded-md flow-root'>
        <Icon className='mx-auto' name={keys[iconName]} size='24' stroke='black'></Icon>
        <p className='mb-0 text-xs text-center break-all'>{keys[iconName]}</p>
      </div>
    );
  }
  return content;
};

const Home = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-blue mx-auto mt-40">
            <h1 className='text-center'>UntitledUI Icons</h1>
            <div className='mt-20'>
              <div className="grid grid-cols-5 gap-4">
                {getIcons(Icons)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

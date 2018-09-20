import React from 'react';

import Layout from 'components/Layout';
import Image from 'components/Image';
import Link from 'components/Link';
import InnerTable from 'components/InnerTable';

const Example = props => (
  <Layout>
    <tr>
      <td className="ta-center">
        <Image
          src="logo.png"
          width="451"
          height="79"
          folder={props.folder}
          alt="React E-mails"
          className="m-auto"
        />
      </td>
    </tr>
    <tr>
      <td>
        <InnerTable>
          <td className="w-50 ta-center f-arial">
            <h2>Inner table example</h2>
          </td>
          <td className="w-50 ta-center f-arial">
            You can use several tds in here!
          </td>
        </InnerTable>
      </td>
    </tr>
    <tr>
      <td>
        <Link
          href="http://github.com/guilhermeutzig/react-emails"
          title="See it on Github!"
        >
          See it on Github!
        </Link>
      </td>
    </tr>
  </Layout>
);

export default Example;

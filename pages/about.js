import Home from '../components/Home'
import Layout from '../components/layout/Layout'
import useTranslation from 'next-translate/useTranslation'
import { getRooms } from '../redux/actions/roomActions'
import { wrapper } from '../redux/store'

export default function Index() {
  const { t } = useTranslation()
  return (
    <Layout>
      <div>
          <p>{t('common:about_1')}</p>
          <p>{t('common:about_2')}</p>
          <p>{t('common:about_3')}</p>
          <p>{t('common:about_4')}</p>
          <p>{t('common:about_5')}</p>
      </div>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store }) => {
  await store.dispatch(getRooms(req, query.page, query.location, query.guests, query.category))
})
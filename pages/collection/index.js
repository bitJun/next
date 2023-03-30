import React ,{ useEffect, useState } from 'react';
import Head from 'next/head';
import { Tag, Space, Avatar } from '@arco-design/web-react';
import styles from '../../styles/collection.module.css';

export default function Collection() {
  const [list, setList] = useState([
    {
      id: 0,
      tags: [
        {
          key: '0-0',
          name: 'Event',
          color: '#DAD7FE'
        },
        {
          key: '0-1',
          name: 'Festival',
          color: '#FFE5D3'
        },
        {
          key: '0-2',
          name: 'General',
          color: '#E2FBD7'
        }
      ],
      title: 'Bole Festival',
      num: '1,456',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu platea pellentesque sed diam mattis dignissim. Tellus mattis fermentum phasellus',
    },
    {
      id: 1,
      tags: [
        {
          key: '1-0',
          name: 'Event',
          color: '#DAD7FE'
        },
        {
          key: '1-1',
          name: 'Festival',
          color: '#FFE5D3'
        },
        {
          key: '1-2',
          name: 'General',
          color: '#E2FBD7'
        }
      ],
      title: 'Bole Festival',
      num: '1,456',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu platea pellentesque sed diam mattis dignissim. Tellus mattis fermentum phasellus',
    },
    {
      id: 2,
      tags: [
        {
          key: '2-0',
          name: 'Event',
          color: '#DAD7FE'
        },
        {
          key: '2-1',
          name: 'Festival',
          color: '#FFE5D3'
        },
        {
          key: '2-2',
          name: 'General',
          color: '#E2FBD7'
        }
      ],
      title: 'Bole Festival',
      num: '1,456',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu platea pellentesque sed diam mattis dignissim. Tellus mattis fermentum phasellus',
    },
    {
      id: 3,
      tags: [
        {
          key: '3-0',
          name: 'Event',
          color: '#DAD7FE'
        },
        {
          key: '3-1',
          name: 'Festival',
          color: '#FFE5D3'
        },
        {
          key: '3-2',
          name: 'General',
          color: '#E2FBD7'
        }
      ],
      title: 'Bole Festival',
      num: '1,456',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu platea pellentesque sed diam mattis dignissim. Tellus mattis fermentum phasellus',
    },
    {
      id: 4,
      tags: [
        {
          key: '4-0',
          name: 'Event',
          color: '#DAD7FE'
        },
        {
          key: '4-1',
          name: 'Festival',
          color: '#FFE5D3'
        },
        {
          key: '4-2',
          name: 'General',
          color: '#E2FBD7'
        }
      ],
      title: 'Bole Festival',
      num: '1,456',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu platea pellentesque sed diam mattis dignissim. Tellus mattis fermentum phasellus',
    },
    {
      id: 5,
      tags: [
        {
          key: '5-0',
          name: 'Event',
          color: '#DAD7FE'
        },
        {
          key: '5-1',
          name: 'Festival',
          color: '#FFE5D3'
        },
        {
          key: '5-2',
          name: 'General',
          color: '#E2FBD7'
        }
      ],
      title: 'Bole Festival',
      num: '1,456',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu platea pellentesque sed diam mattis dignissim. Tellus mattis fermentum phasellus',
    }
  ]);

  useEffect(()=>{
    // loadList();
  }, []);

  return (
    <div className={styles['collection_view']}>
      <Head>
        <title>Collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.list}>
          {
            list.map(item=>
              <div
                className={styles['list_item']}
                key={item.id}
              >
                <Space
                  className={styles['list_item_tags']}
                  size='medium'
                >
                  {
                    item.tags && item.tags.map(json=>
                      <Tag
                        key={json.key}
                        checkable={false}
                        defaultChecked={true}
                        color={json.color}
                      >
                        {json.name}
                      </Tag>
                    )
                  }
                </Space>
                <div className={`${styles['flexmain']} ${styles['title']}`}>
                  {item.title}
                  <div className={styles['title_num']}>
                    <span className={styles['title_num_line']}>N</span>
                    {item.num}
                  </div>
                </div>
                <div className={styles.desc}>{item.desc}</div>
                <div className={`${styles.flexmain} ${styles.avatars}`}>
                  <div className={styles.avatarsList}>
                    <Avatar className={styles.avatarsListItem}>
                      <img
                        alt='avatar'
                        src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
                      />
                    </Avatar>
                    <Avatar className={styles.avatarsListItem}>
                      <img
                        alt='avatar'
                        src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
                      />
                    </Avatar>
                    <Avatar className={styles.avatarsListItem}>
                      <img
                        alt='avatar'
                        src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
                      />
                    </Avatar>
                    <Avatar className={styles.avatarsListItem}>
                      <img
                        alt='avatar'
                        src='/plus.png'
                      />
                    </Avatar>
                  </div>
                  <Avatar>
                    <img
                      alt='avatar'
                      src='/icon.png'
                    />
                  </Avatar>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

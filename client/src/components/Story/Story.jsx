import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { deleteStory, likeStory } from "../../actions/StoryAction";
import { Card, Tooltip, Typography, Image } from "antd";
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from "@ant-design/icons";
import styles from "../../assets/styles/Story.styles";

const { Meta } = Card;
const { Link, Paragraph, Text } = Typography;

const Story = ({ story, setSelectedId }) => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(true);

  const user = JSON.parse(localStorage.getItem("profile"));

  const cardActions = [
    <div style={styles.actions}>
      <Tooltip
        placement='top'
        title='Like'
        color='magenta'
        onClick={() => {
          dispatch(likeStory(story));
        }}
      >
        <HeartTwoTone twoToneColor='magenta' />
        &nbsp; {story.likes.length} &nbsp;
      </Tooltip>
    </div>,
    <Tooltip placement='top' title='Edit'>
      <EditOutlined
        onClick={() => {
          setSelectedId(story._id);
        }}
      />
    </Tooltip>,
    <Tooltip placement='top' title='Delete' color=''>
      <DeleteTwoTone
        twoToneColor='red'
        onClick={() => {
          dispatch(deleteStory(story._id));
        }}
      />
    </Tooltip>,
  ];

  return (
    <Card
      style={styles.card}
      cover={<Image src={story.image} />}
      actions={
        user?.result?._id === story?.userId
          ? cardActions
          : user?.result
          ? cardActions.slice(0, 1)
          : null
      }
    >
      <Meta title={story.username} />
      <Paragraph
        style={{ margin: 0 }}
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: "more",
          onExpand: () => {
            setExpand(true);
          },
          onEllipsis: () => {
            setExpand(false);
          },
        }}
      >
        {story.caption}
      </Paragraph>
      {expand ? (
        <Link href='#'>{story.tags.split(" ").map((tag) => `#${tag} `)}</Link>
      ) : null}
      <br />
      <Text type='secondary'>{moment(story.postDate).fromNow()}</Text>
    </Card>
  );
};

export default Story;

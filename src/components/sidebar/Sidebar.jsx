import "./sidebar.scss"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import SendTimeExtensionRoundedIcon from '@mui/icons-material/SendTimeExtensionRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
const Sidebar = () => {
    
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">skateboard</span>
        </div>
        <div className="center">
            <ul>
                <p>MENU</p>
                <li>
                    <HomeRoundedIcon className="icon" />
                    <span>Discover</span>
                </li>
                <li>
                    <NearMeRoundedIcon className="icon" />
                    <span>Trending</span>
                </li>
                <li>
                    <LiveTvRoundedIcon className="icon" />
                    <span>Streaming</span>
                </li>
                <li>
                    <PlaylistPlayRoundedIcon className="icon" />
                    <span>Playlist</span>
                </li>
                <li>
                    <FolderSpecialRoundedIcon className="icon" />
                    <span>Bookmark</span>
                </li>
                <hr />
                <p>CATEGORY</p>
                <li>
                    <SendTimeExtensionRoundedIcon className="icon" />
                    <span>Live Stream</span>
                </li>
                <li>
                    <WhatshotRoundedIcon className="icon" />
                    <span>Tutorial</span>
                </li>
                <li>
                    <EmojiEventsRoundedIcon className="icon" />
                    <span>Competition</span>
                </li>
                <li>
                    <PeopleRoundedIcon className="icon" />
                    <span>Comunity</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <span>night mode</span>
        </div>
    </div>
  )
}

export default Sidebar
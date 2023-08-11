const Sequelize = require('sequelize')
const UserModel = require('./../models/users')
const AdminModel = require('./../models/admin')
const TopicsModel = require('./../models/topics')
const GiftsModel = require('./../models/gifts')
const MembershipModel = require('./../models/membership')
const UserMembershipModel = require('./../models/userMembership')
const VideosModel = require('./../models/videos')
const chatsRoomModel = require('./../models/chatsrooms')
const chatsMessageModel = require('./../models/chatsmessages')
const FollowerModel = require('./../models/followers')
const NotificationModel = require('./../models/notifications')
const userGiftsModel = require('./../models/usergifts')
const giftsTransactionModel = require('./../models/giftstransaction')
const userReportsModel = require('./../models/userreports')
const reportReasonModel = require('./../models/reportreasons')
const UserlevelModel = require('./../models/userlevel')
const ContactRequestModel = require('./../models/contactrequest')
const FAQModel = require('./../models/faq')
const videoGroupModel = require('./../models/videogroup')
const groupInviteModel = require('./../models/groupinvite')
const UserBankDetailsModel = require('./../models/userbankdetails')
const WithdrawalsModel = require('./../models/withdrwal')
const AudioGroupModel = require('./../models/audiogroup')
const AudioGroupDetailsModel = require('./../models/audiogroupdetails')
const EmailSettingsModel = require('./../models/emailsettings')
const EmailTemplateModel = require('./../models/emailtemplate')
const BannedWordsModel = require('./../models/bannedwords')
const AdminNotificationModel = require('./../models/adminnotification')
const AccessModuleModel = require('./../models/accessmodule')
const RolesModel = require('./../models/roles')
const InAppPurchesModel = require('./../models/inpurcheseitem')
const WalletTransactionModel = require('./../models/wallettransaction')
const MessengersModel = require('./../models/messenger')
const DailyTaskModel = require('./../models/dailytask')
const UserdiaMondLogsModel = require('./../models/userdiamondlogs')
const MembershipNobelModel = require('./../models/membershipnobel')
const MembershipSubNobelModel = require('./../models/membershipsubnobel')
const DiamondsModel = require('./../models/diamonds')
const MyPurchasesModel = require('./../models/mypurchases')
const SettingsModel = require('./../models/settings')
const CoinsExchangeModel = require('./../models/coinsexchange')
const GroupChatsMessagesModel = require('./../models/groupchatsmessage')
const ChatsClearMessagesModel = require('./../models/chatsclearmessage')
const GroupChatsClearMessagesModel = require('./../models/groupchatsclearmessage')
const APILogsModel = require('./../models/apilogs')

const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.db, process.env.user, process.env.password, {
	host: process.env.host,
	dialect: 'mysql',
	logging: false,
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})

const User = UserModel(sequelize, Sequelize)
const Admin = AdminModel(sequelize, Sequelize)
const Topics = TopicsModel(sequelize, Sequelize)
const Gifts = GiftsModel(sequelize, Sequelize)
const Membership = MembershipModel(sequelize, Sequelize)
const UserMembership = UserMembershipModel(sequelize, Sequelize)
const Videos = VideosModel(sequelize, Sequelize)
const chatsRoom= chatsRoomModel(sequelize, Sequelize)
const chatsMessage= chatsMessageModel(sequelize, Sequelize)
const Follower= FollowerModel(sequelize, Sequelize)
const Notification= NotificationModel(sequelize, Sequelize)
const userGifts= userGiftsModel(sequelize, Sequelize)
const giftsTransaction= giftsTransactionModel(sequelize, Sequelize)
const userReports= userReportsModel(sequelize, Sequelize)
const reportReasons= reportReasonModel(sequelize, Sequelize)
const Userlevel= UserlevelModel(sequelize, Sequelize)
const ContactRequest= ContactRequestModel(sequelize, Sequelize)
const FAQ= FAQModel(sequelize, Sequelize)
const VideoGroup= videoGroupModel(sequelize, Sequelize)
const GroupInvite= groupInviteModel(sequelize, Sequelize)
const UserBankDetails= UserBankDetailsModel(sequelize, Sequelize)
const Withdrawals= WithdrawalsModel(sequelize, Sequelize)
const AudioGroup= AudioGroupModel(sequelize, Sequelize)
const AudioGroupDetails= AudioGroupDetailsModel(sequelize, Sequelize)
const EmailSettings = EmailSettingsModel(sequelize, Sequelize)
const EmailTemplate = EmailTemplateModel(sequelize, Sequelize)
const BannedWords = BannedWordsModel(sequelize, Sequelize)
const AdminNotification = AdminNotificationModel(sequelize, Sequelize)
const AccessModule = AccessModuleModel(sequelize, Sequelize)
const Roles = RolesModel(sequelize, Sequelize)
const InAppPurches = InAppPurchesModel(sequelize, Sequelize)
const WalletTransaction = WalletTransactionModel(sequelize, Sequelize)
const Messengers = MessengersModel(sequelize, Sequelize)
const DailyTask = DailyTaskModel(sequelize, Sequelize)
const UserdiaMondLogs = UserdiaMondLogsModel(sequelize, Sequelize)
const MembershipNobel = MembershipNobelModel(sequelize, Sequelize)
const MembershipSubNobel = MembershipSubNobelModel(sequelize, Sequelize)
const DiamondsShop = DiamondsModel(sequelize, Sequelize)
const MyPurchases = MyPurchasesModel(sequelize, Sequelize)
const Settings = SettingsModel(sequelize, Sequelize)
const CoinsExchange = CoinsExchangeModel(sequelize, Sequelize)
const GroupChatsMessages = GroupChatsMessagesModel(sequelize, Sequelize)
const ChatsClearMessages = ChatsClearMessagesModel(sequelize, Sequelize)
const GroupChatsClearMessages = GroupChatsClearMessagesModel(sequelize, Sequelize)
const APILogs = APILogsModel(sequelize, Sequelize)
// const Category = CategoryModel(sequelize, Sequelize)
// const Feeds= FeedModel(sequelize, Sequelize)

// don't Use this Script It Force create Table if table existing it will drop table first and Create again
// sequelize.sync({ force: false })
// .then(() => {
//  	// console.log(`Database & tables created!`)
//  })

module.exports = {
	sequelize,
	User,
	Admin,
	Topics,
	Gifts,
	Membership,
	UserMembership,
	Videos,
	chatsRoom,
	chatsMessage,
	Follower,
	Notification,
	userGifts,
	giftsTransaction,
	userReports,
	reportReasons,
	Userlevel,
	ContactRequest,
	FAQ,
	VideoGroup,
	GroupInvite,
	UserBankDetails,
	Withdrawals,
	AudioGroup,
	AudioGroupDetails,
	EmailSettings,
	EmailTemplate,
	BannedWords,
	AdminNotification,
	AccessModule,
	Roles,
	InAppPurches,
	WalletTransaction,
	Messengers,
	DailyTask,
	UserdiaMondLogs,
	MembershipNobel,
	MembershipSubNobel,
	DiamondsShop,
	MyPurchases,
	Settings,
	CoinsExchange,
	GroupChatsMessages,
	ChatsClearMessages,
	GroupChatsClearMessages,
	APILogs
}
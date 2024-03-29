USE [DB_Test]
GO
/****** Object:  Table [dbo].[users]    Script Date: 02/03/2024 6:47:59 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[tuoi] [int] NULL,
	[gioi_tinh] [bit] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([id], [ma], [ten], [tuoi], [gioi_tinh]) VALUES (1, N'A001', N'Đỗ Thế Anh', 20, 1)
INSERT [dbo].[users] ([id], [ma], [ten], [tuoi], [gioi_tinh]) VALUES (2, N'A002', N'Nguyễn Xuân Lâm', 20, 1)
INSERT [dbo].[users] ([id], [ma], [ten], [tuoi], [gioi_tinh]) VALUES (3, N'A003', N'Nguyễn Mạnh Hiếu', 20, 1)
INSERT [dbo].[users] ([id], [ma], [ten], [tuoi], [gioi_tinh]) VALUES (4, N'A004', N'Tô Khánh Linh', 20, 0)
SET IDENTITY_INSERT [dbo].[users] OFF
GO

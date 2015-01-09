<%@ Application Language="C#" %>
<script runat="server">
using System;
using System.Collections;
using System.ComponentModel;
using System.Web;
using System.Web.Http;
using System.Web.SessionState;

namespace RoundTheClock
{
	public class Global : System.Web.HttpApplication
	{		
		protected void Application_Start (Object sender, EventArgs e)
		{
			GlobalConfiguration.Configuration.Routes.MapHttpRoute("Default", 
				"{controller}/{id}", 
				new { id = RouteParameter.Optional });
		}
 
		protected void Session_Start (Object sender, EventArgs e)
		{

		}

		protected void Application_BeginRequest (Object sender, EventArgs e)
		{

		}

		protected void Application_EndRequest (Object sender, EventArgs e)
		{

		}

		protected void Application_AuthenticateRequest (Object sender, EventArgs e)
		{

		}

		protected void Application_Error (Object sender, EventArgs e)
		{

		}

		protected void Session_End (Object sender, EventArgs e)
		{

		}

		protected void Application_End (Object sender, EventArgs e)
		{

		}
	}
}

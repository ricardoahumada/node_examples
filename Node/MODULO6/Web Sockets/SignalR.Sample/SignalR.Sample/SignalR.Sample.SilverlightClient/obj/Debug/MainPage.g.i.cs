﻿#pragma checksum "D:\Users\gustavoa\Documents\Visual Studio 2012\Projects\SignalR.Sample\SignalR.Sample.SilverlightClient\MainPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "498F50BE8F372AB0CF8B97488ECAEE7F"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.18010
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Automation.Peers;
using System.Windows.Automation.Provider;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Resources;
using System.Windows.Shapes;
using System.Windows.Threading;


namespace SignalR.Sample.SilverlightClient {
    
    
    public partial class MainPage : System.Windows.Controls.UserControl {
        
        internal System.Windows.Controls.Grid LayoutRoot;
        
        internal System.Windows.Controls.TextBox ResponseText;
        
        internal System.Windows.Controls.TextBox ResponseAsyncText;
        
        internal System.Windows.Controls.TextBox OthersCallbackText;
        
        internal System.Windows.Controls.TextBox BroadcastText;
        
        internal System.Windows.Controls.TextBox BroadcastToGroupText;
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Windows.Application.LoadComponent(this, new System.Uri("/SignalR.Sample.SilverlightClient;component/MainPage.xaml", System.UriKind.Relative));
            this.LayoutRoot = ((System.Windows.Controls.Grid)(this.FindName("LayoutRoot")));
            this.ResponseText = ((System.Windows.Controls.TextBox)(this.FindName("ResponseText")));
            this.ResponseAsyncText = ((System.Windows.Controls.TextBox)(this.FindName("ResponseAsyncText")));
            this.OthersCallbackText = ((System.Windows.Controls.TextBox)(this.FindName("OthersCallbackText")));
            this.BroadcastText = ((System.Windows.Controls.TextBox)(this.FindName("BroadcastText")));
            this.BroadcastToGroupText = ((System.Windows.Controls.TextBox)(this.FindName("BroadcastToGroupText")));
        }
    }
}

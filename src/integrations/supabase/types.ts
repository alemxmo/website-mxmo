export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      "[WHATSAPP]conversation_messages": {
        Row: {
          conversation_id: string | null
          created_at: string
          from_me: boolean | null
          id: string
          message: string | null
        }
        Insert: {
          conversation_id?: string | null
          created_at?: string
          from_me?: boolean | null
          id?: string
          message?: string | null
        }
        Update: {
          conversation_id?: string | null
          created_at?: string
          from_me?: boolean | null
          id?: string
          message?: string | null
        }
        Relationships: []
      }
      "[WHATSAPP]conversations": {
        Row: {
          agent_id: string
          avg_response_time: number | null
          company_id: string
          created_at: string
          customer_name: string | null
          id: string
          interaction_count: number | null
          interest: string | null
          last_message_at: string | null
          markdown_report: string | null
          status: string | null
          summary: string | null
          updated_at: string
          vendor_id: string | null
        }
        Insert: {
          agent_id: string
          avg_response_time?: number | null
          company_id: string
          created_at?: string
          customer_name?: string | null
          id: string
          interaction_count?: number | null
          interest?: string | null
          last_message_at?: string | null
          markdown_report?: string | null
          status?: string | null
          summary?: string | null
          updated_at?: string
          vendor_id?: string | null
        }
        Update: {
          agent_id?: string
          avg_response_time?: number | null
          company_id?: string
          created_at?: string
          customer_name?: string | null
          id?: string
          interaction_count?: number | null
          interest?: string | null
          last_message_at?: string | null
          markdown_report?: string | null
          status?: string | null
          summary?: string | null
          updated_at?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_duplicate_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_api_credentials: {
        Row: {
          agent_id: string
          created_at: string
          credential_key: string
          credential_type: string
          credential_value: string
          id: string
          last_migrated: string | null
          updated_at: string
        }
        Insert: {
          agent_id: string
          created_at?: string
          credential_key: string
          credential_type: string
          credential_value?: string
          id?: string
          last_migrated?: string | null
          updated_at?: string
        }
        Update: {
          agent_id?: string
          created_at?: string
          credential_key?: string
          credential_type?: string
          credential_value?: string
          id?: string
          last_migrated?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_api_credentials_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_features: {
        Row: {
          agent_id: string
          created_at: string
          feature_name: string
          id: string
          is_enabled: boolean
          is_visible: boolean
          last_migrated: string | null
          updated_at: string
        }
        Insert: {
          agent_id: string
          created_at?: string
          feature_name: string
          id?: string
          is_enabled?: boolean
          is_visible?: boolean
          last_migrated?: string | null
          updated_at?: string
        }
        Update: {
          agent_id?: string
          created_at?: string
          feature_name?: string
          id?: string
          is_enabled?: boolean
          is_visible?: boolean
          last_migrated?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_features_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_instructions: {
        Row: {
          agent_id: string
          behavior_text: string
          company_text: string
          created_at: string
          id: string
          last_migrated: string | null
          updated_at: string
        }
        Insert: {
          agent_id: string
          behavior_text: string
          company_text: string
          created_at?: string
          id?: string
          last_migrated?: string | null
          updated_at?: string
        }
        Update: {
          agent_id?: string
          behavior_text?: string
          company_text?: string
          created_at?: string
          id?: string
          last_migrated?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_instructions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_interactions: {
        Row: {
          agent_id: string
          company_id: string
          conversion_count: number | null
          created_at: string
          date: string
          id: string
          interaction_count: number
          response_time_avg: number | null
          user_satisfaction_avg: number | null
        }
        Insert: {
          agent_id: string
          company_id: string
          conversion_count?: number | null
          created_at?: string
          date: string
          id?: string
          interaction_count?: number
          response_time_avg?: number | null
          user_satisfaction_avg?: number | null
        }
        Update: {
          agent_id?: string
          company_id?: string
          conversion_count?: number | null
          created_at?: string
          date?: string
          id?: string
          interaction_count?: number
          response_time_avg?: number | null
          user_satisfaction_avg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_interactions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_interactions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_training_data: {
        Row: {
          agent_id: string
          content: string | null
          created_at: string
          id: string
          last_migrated: string | null
          name: string
          rag_name: string | null
          size: number | null
          type: Database["public"]["Enums"]["training_data_type"]
          updated_at: string
          upload_date: string
          url: string
        }
        Insert: {
          agent_id: string
          content?: string | null
          created_at?: string
          id?: string
          last_migrated?: string | null
          name: string
          rag_name?: string | null
          size?: number | null
          type: Database["public"]["Enums"]["training_data_type"]
          updated_at?: string
          upload_date?: string
          url: string
        }
        Update: {
          agent_id?: string
          content?: string | null
          created_at?: string
          id?: string
          last_migrated?: string | null
          name?: string
          rag_name?: string | null
          size?: number | null
          type?: Database["public"]["Enums"]["training_data_type"]
          updated_at?: string
          upload_date?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_training_data_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agents: {
        Row: {
          behavior_instructions: Json | null
          company_id: string
          company_name: string | null
          config: Json | null
          created_at: string
          id: string
          interactions: number | null
          last_configured: string | null
          migration_complete: boolean | null
          name: string
          performance_metrics: Json | null
          sales_prompts: Json | null
          status_enum: Database["public"]["Enums"]["agent_status"] | null
          type_enum: Database["public"]["Enums"]["agent_type"] | null
          updated_at: string
        }
        Insert: {
          behavior_instructions?: Json | null
          company_id: string
          company_name?: string | null
          config?: Json | null
          created_at?: string
          id?: string
          interactions?: number | null
          last_configured?: string | null
          migration_complete?: boolean | null
          name: string
          performance_metrics?: Json | null
          sales_prompts?: Json | null
          status_enum?: Database["public"]["Enums"]["agent_status"] | null
          type_enum?: Database["public"]["Enums"]["agent_type"] | null
          updated_at?: string
        }
        Update: {
          behavior_instructions?: Json | null
          company_id?: string
          company_name?: string | null
          config?: Json | null
          created_at?: string
          id?: string
          interactions?: number | null
          last_configured?: string | null
          migration_complete?: boolean | null
          name?: string
          performance_metrics?: Json | null
          sales_prompts?: Json | null
          status_enum?: Database["public"]["Enums"]["agent_status"] | null
          type_enum?: Database["public"]["Enums"]["agent_type"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "agents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      call_transcripts: {
        Row: {
          call_date: string
          call_duration: number
          client_objections: Json | null
          company_id: string
          created_at: string
          customer_name: string
          id: string
          improvement_areas: Json | null
          key_moments: Json | null
          markdown_report: string | null
          opportunity_status: string | null
          performance_score: number | null
          sentiment: string | null
          strengths: Json | null
          summary: string | null
          topics: Json | null
          transcript_text: string | null
          updated_at: string
          vendor_id: string
        }
        Insert: {
          call_date?: string
          call_duration?: number
          client_objections?: Json | null
          company_id: string
          created_at?: string
          customer_name: string
          id?: string
          improvement_areas?: Json | null
          key_moments?: Json | null
          markdown_report?: string | null
          opportunity_status?: string | null
          performance_score?: number | null
          sentiment?: string | null
          strengths?: Json | null
          summary?: string | null
          topics?: Json | null
          transcript_text?: string | null
          updated_at?: string
          vendor_id: string
        }
        Update: {
          call_date?: string
          call_duration?: number
          client_objections?: Json | null
          company_id?: string
          created_at?: string
          customer_name?: string
          id?: string
          improvement_areas?: Json | null
          key_moments?: Json | null
          markdown_report?: string | null
          opportunity_status?: string | null
          performance_score?: number | null
          sentiment?: string | null
          strengths?: Json | null
          summary?: string | null
          topics?: Json | null
          transcript_text?: string | null
          updated_at?: string
          vendor_id?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          created_at: string
          description: string | null
          id: string
          industry: string | null
          is_active: boolean
          is_demo: boolean
          location: string | null
          logo: string | null
          name: string
          updated_at: string
          website: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          industry?: string | null
          is_active?: boolean
          is_demo?: boolean
          location?: string | null
          logo?: string | null
          name: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          industry?: string | null
          is_active?: boolean
          is_demo?: boolean
          location?: string | null
          logo?: string | null
          name?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      customer_tag_assignments: {
        Row: {
          conversation_id: string
          created_at: string
          created_by: string
          id: string
          tag_id: string
        }
        Insert: {
          conversation_id: string
          created_at?: string
          created_by: string
          id?: string
          tag_id: string
        }
        Update: {
          conversation_id?: string
          created_at?: string
          created_by?: string
          id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_tag_assignments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_tag_assignments_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "customer_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_tags: {
        Row: {
          color: string | null
          company_id: string
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          color?: string | null
          company_id: string
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          color?: string | null
          company_id?: string
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_tags_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      deleted_companies: {
        Row: {
          company_data: Json
          deleted_at: string
          deleted_by: string | null
          id: string
          original_id: string
          related_data: Json
        }
        Insert: {
          company_data: Json
          deleted_at?: string
          deleted_by?: string | null
          id?: string
          original_id: string
          related_data: Json
        }
        Update: {
          company_data?: Json
          deleted_at?: string
          deleted_by?: string | null
          id?: string
          original_id?: string
          related_data?: Json
        }
        Relationships: []
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      evaluations: {
        Row: {
          conversation_id: string
          created_at: string
          evaluation_date: string
          evaluator_id: string | null
          evaluator_type: Database["public"]["Enums"]["evaluator_type_enum"]
          feedback: string | null
          id: string
          improvement_areas: Json | null
          metadata: Json | null
          scores: Json
          strengths: Json | null
          updated_at: string
        }
        Insert: {
          conversation_id: string
          created_at?: string
          evaluation_date?: string
          evaluator_id?: string | null
          evaluator_type: Database["public"]["Enums"]["evaluator_type_enum"]
          feedback?: string | null
          id?: string
          improvement_areas?: Json | null
          metadata?: Json | null
          scores?: Json
          strengths?: Json | null
          updated_at?: string
        }
        Update: {
          conversation_id?: string
          created_at?: string
          evaluation_date?: string
          evaluator_id?: string | null
          evaluator_type?: Database["public"]["Enums"]["evaluator_type_enum"]
          feedback?: string | null
          id?: string
          improvement_areas?: Json | null
          metadata?: Json | null
          scores?: Json
          strengths?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      feature_schedules: {
        Row: {
          agent_id: string
          created_at: string
          day_of_month: number | null
          days_of_week: number[] | null
          enabled: boolean
          feature_name: string
          frequency: Database["public"]["Enums"]["schedule_frequency"]
          id: string
          instructions: string | null
          last_migrated: string | null
          last_run: string | null
          next_run: string | null
          recipient_whatsapp: string | null
          time_of_day: string | null
          updated_at: string
        }
        Insert: {
          agent_id: string
          created_at?: string
          day_of_month?: number | null
          days_of_week?: number[] | null
          enabled?: boolean
          feature_name: string
          frequency?: Database["public"]["Enums"]["schedule_frequency"]
          id?: string
          instructions?: string | null
          last_migrated?: string | null
          last_run?: string | null
          next_run?: string | null
          recipient_whatsapp?: string | null
          time_of_day?: string | null
          updated_at?: string
        }
        Update: {
          agent_id?: string
          created_at?: string
          day_of_month?: number | null
          days_of_week?: number[] | null
          enabled?: boolean
          feature_name?: string
          frequency?: Database["public"]["Enums"]["schedule_frequency"]
          id?: string
          instructions?: string | null
          last_migrated?: string | null
          last_run?: string | null
          next_run?: string | null
          recipient_whatsapp?: string | null
          time_of_day?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "feature_schedules_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      graficos_data_for_charts: {
        Row: {
          agent_id: string | null
          clicks_likes: number | null
          company_id: string
          created_at: string
          data: Json | null
          data_types: Database["public"]["Enums"]["data_type"] | null
          engagement: number | null
          id: string
          impressions_comments: number | null
        }
        Insert: {
          agent_id?: string | null
          clicks_likes?: number | null
          company_id: string
          created_at?: string
          data?: Json | null
          data_types?: Database["public"]["Enums"]["data_type"] | null
          engagement?: number | null
          id?: string
          impressions_comments?: number | null
        }
        Update: {
          agent_id?: string | null
          clicks_likes?: number | null
          company_id?: string
          created_at?: string
          data?: Json | null
          data_types?: Database["public"]["Enums"]["data_type"] | null
          engagement?: number | null
          id?: string
          impressions_comments?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "[ GRAFICOS ] - DATA FOR CHARTS_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "graficos_data_for_charts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_url: string | null
          created_at: string
          id: string
          message: string
          read: boolean
          title: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          action_url?: string | null
          created_at?: string
          id?: string
          message: string
          read?: boolean
          title: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          action_url?: string | null
          created_at?: string
          id?: string
          message?: string
          read?: boolean
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      performance_metrics: {
        Row: {
          created_at: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["entity_type_enum"]
          id: string
          metadata: Json | null
          metric_date: string
          metric_type: Database["public"]["Enums"]["metric_type_enum"]
          report_id: string | null
          updated_at: string
          value: number
        }
        Insert: {
          created_at?: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["entity_type_enum"]
          id?: string
          metadata?: Json | null
          metric_date: string
          metric_type: Database["public"]["Enums"]["metric_type_enum"]
          report_id?: string | null
          updated_at?: string
          value: number
        }
        Update: {
          created_at?: string
          entity_id?: string
          entity_type?: Database["public"]["Enums"]["entity_type_enum"]
          id?: string
          metadata?: Json | null
          metric_date?: string
          metric_type?: Database["public"]["Enums"]["metric_type_enum"]
          report_id?: string | null
          updated_at?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "performance_metrics_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_stats: {
        Row: {
          avg_conversion_rate: number
          created_at: string
          date: string
          id: string
          total_companies: number
          total_interactions: number
          total_users: number
          updated_at: string
        }
        Insert: {
          avg_conversion_rate?: number
          created_at?: string
          date: string
          id?: string
          total_companies?: number
          total_interactions?: number
          total_users?: number
          updated_at?: string
        }
        Update: {
          avg_conversion_rate?: number
          created_at?: string
          date?: string
          id?: string
          total_companies?: number
          total_interactions?: number
          total_users?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_id: string | null
          company_name: string | null
          created_at: string
          email: string
          id: string
          is_active: boolean
          last_active: string
          name: string
          phone: string | null
          role: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company_id?: string | null
          company_name?: string | null
          created_at?: string
          email: string
          id: string
          is_active?: boolean
          last_active?: string
          name: string
          phone?: string | null
          role: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company_id?: string | null
          company_name?: string | null
          created_at?: string
          email?: string
          id?: string
          is_active?: boolean
          last_active?: string
          name?: string
          phone?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_company_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      rag017b9707_dfb8_4727_ae96_b087e5e385a5: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      rag0d9f27bc_6c02_48b6_89ef_e48a56bdf91b: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      rag16ff9d96_ef69_4c6d_b927_33084ef03569: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      rag28dc1f2d_7964_48e2_a0e9_6e7a0ffeed41: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      rag3101c5ad_27c0_4388_a4b1_7dc76bdf679f: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      rag6f13f203_c35c_4dd3_a5e8_ee4105c77703: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      rag867612a5_41ef_4ee2_bcdb_5e748cf809a1: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      rag992f1ad9_212c_4623_b58e_fe9eda819c53: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      ragce614889_29e5_4813_b0a1_f58929ddc4e2: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      ragfd602bfb_3332_4f31_b6e7_a39934363939: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      reports: {
        Row: {
          company_id: string
          content: string | null
          created_at: string
          data: Json | null
          end_date: string
          id: string
          pdf: string | null
          period: Database["public"]["Enums"]["report_period_enum"]
          related_entity_id: string | null
          related_entity_type: string | null
          report_type: Database["public"]["Enums"]["report_type_enum"]
          start_date: string
          summary: string | null
          title: string
          updated_at: string
        }
        Insert: {
          company_id: string
          content?: string | null
          created_at?: string
          data?: Json | null
          end_date: string
          id?: string
          pdf?: string | null
          period: Database["public"]["Enums"]["report_period_enum"]
          related_entity_id?: string | null
          related_entity_type?: string | null
          report_type: Database["public"]["Enums"]["report_type_enum"]
          start_date: string
          summary?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          content?: string | null
          created_at?: string
          data?: Json | null
          end_date?: string
          id?: string
          pdf?: string | null
          period?: Database["public"]["Enums"]["report_period_enum"]
          related_entity_id?: string | null
          related_entity_type?: string | null
          report_type?: Database["public"]["Enums"]["report_type_enum"]
          start_date?: string
          summary?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reports_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          category: string
          created_at: string
          id: string
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          key: string
          updated_at?: string
          value: Json
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      system_settings: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          setting_key: string
          setting_value: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          setting_key: string
          setting_value: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: string
          updated_at?: string
        }
        Relationships: []
      }
      team_invitation_logs: {
        Row: {
          action: string
          created_at: string | null
          details: Json | null
          email: string
          id: string
          invitation_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          details?: Json | null
          email: string
          id?: string
          invitation_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          details?: Json | null
          email?: string
          id?: string
          invitation_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_invitation_logs_invitation_id_fkey"
            columns: ["invitation_id"]
            isOneToOne: false
            referencedRelation: "team_invitations"
            referencedColumns: ["id"]
          },
        ]
      }
      team_invitations: {
        Row: {
          company_id: string
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string
          name: string
          role: string
          status: string
          token: string
        }
        Insert: {
          company_id: string
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          invited_by: string
          name: string
          role: string
          status?: string
          token: string
        }
        Update: {
          company_id?: string
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invited_by?: string
          name?: string
          role?: string
          status?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_invitations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      user_whatsapp_instances: {
        Row: {
          created_at: string
          id: string
          instance_name: string
          is_connected: boolean
          last_connected_at: string | null
          phone_number: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          instance_name: string
          is_connected?: boolean
          last_connected_at?: string | null
          phone_number?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          instance_name?: string
          is_connected?: boolean
          last_connected_at?: string | null
          phone_number?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      vendor_reports: {
        Row: {
          company_id: string
          content: string | null
          created_at: string
          id: string
          report_date: string
          summary: string | null
          title: string
          updated_at: string
          vendor_id: string
        }
        Insert: {
          company_id: string
          content?: string | null
          created_at?: string
          id?: string
          report_date?: string
          summary?: string | null
          title: string
          updated_at?: string
          vendor_id: string
        }
        Update: {
          company_id?: string
          content?: string | null
          created_at?: string
          id?: string
          report_date?: string
          summary?: string | null
          title?: string
          updated_at?: string
          vendor_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      backup_and_delete_company: {
        Args: { _company_id: string; _user_id: string }
        Returns: string
      }
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      create_demo_user: {
        Args: {
          _email: string
          _password: string
          _name: string
          _role: string
        }
        Returns: string
      }
      create_team_invitation_logs_table: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      delete_team_invitation: {
        Args: { invitation_id: string }
        Returns: boolean
      }
      fix_feature_data_consistency: {
        Args: Record<PropertyKey, never>
        Returns: {
          result_agent_id: string
          result_feature_name: string
          action_taken: string
        }[]
      }
      get_all_team_invitations: {
        Args: Record<PropertyKey, never>
        Returns: {
          company_id: string
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string
          name: string
          role: string
          status: string
          token: string
        }[]
      }
      get_auth_user_company_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_auth_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_pending_invitations: {
        Args: { company_id_param: string }
        Returns: {
          company_id: string
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string
          name: string
          role: string
          status: string
          token: string
        }[]
      }
      get_setting: {
        Args: { p_key: string }
        Returns: string
      }
      get_user_company_id_secure: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_role_secure: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      is_admin_or_superadmin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_admin_or_superadmin_secure: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_agent_fully_migrated: {
        Args: { agent_uuid: string }
        Returns: boolean
      }
      is_company_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_superadmin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      match_documents: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_rag017b9707_dfb8_4727_ae96_b087e5e385a5: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_rag0d9f27bc_6c02_48b6_89ef_e48a56bdf91b: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_rag16ff9d96_ef69_4c6d_b927_33084ef03569: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_rag28dc1f2d_7964_48e2_a0e9_6e7a0ffeed41: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_rag3101c5ad_27c0_4388_a4b1_7dc76bdf679f: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_rag6f13f203_c35c_4dd3_a5e8_ee4105c77703: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_rag867612a5_41ef_4ee2_bcdb_5e748cf809a1: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_rag992f1ad9_212c_4623_b58e_fe9eda819c53: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_ragce614889_29e5_4813_b0a1_f58929ddc4e2: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_ragfd602bfb_3332_4f31_b6e7_a39934363939: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      migrate_graficos_company_id: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      migrate_vendor_performance_reports: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      refresh_daily_stats: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      set_setting: {
        Args: {
          p_key: string
          p_value: string
          p_category?: string
          p_description?: string
        }
        Returns: undefined
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      update_agent_feature: {
        Args: {
          p_agent_id: string
          p_feature_name: string
          p_is_enabled: boolean
        }
        Returns: string
      }
      update_sales_agent_prompt: {
        Args: { agent_id: string; prompt_type: string; content: string }
        Returns: Json
      }
      user_exists_in_auth: {
        Args: { user_id: string }
        Returns: boolean
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      agent_status: "active" | "inactive" | "pending"
      agent_type: "engagement" | "sales"
      call_sentiment: "positive" | "negative" | "neutral"
      call_status: "completed" | "pending" | "missed" | "canceled"
      conversation_status_enum:
        | "completed"
        | "in_progress"
        | "scheduled"
        | "canceled"
      conversation_type_enum: "call" | "whatsapp" | "chat"
      conversion_stage:
        | "interested"
        | "in_progress"
        | "converted"
        | "not_interested"
      data_type: "metaAds" | "instagram"
      entity_type_enum: "vendor" | "agent" | "company"
      evaluator_type_enum: "ai" | "human" | "system"
      message_type_enum: "text" | "image" | "video" | "audio" | "file"
      metric_type_enum:
        | "call_score"
        | "response_time"
        | "conversion_rate"
        | "customer_satisfaction"
        | "message_count"
        | "conversation_count"
      opportunity_status:
        | "closed_won"
        | "closed_lost"
        | "qualified"
        | "opportunity"
        | "in_progress"
      report_period_enum: "day" | "week" | "month" | "year"
      report_type_enum:
        | "performance"
        | "engagement"
        | "sales"
        | "whatsapp"
        | "calls"
        | "vendor"
        | "company"
        | "overview"
        | "content"
        | "ads"
        | "instagram"
        | "vendorPerformance"
      schedule_frequency: "daily" | "weekly" | "monthly" | "custom" | "never"
      sender_type_enum: "agent" | "customer" | "system"
      sentiment_enum: "positive" | "neutral" | "negative"
      sentiment_type: "positive" | "neutral" | "negative"
      training_data_type:
        | "text"
        | "image"
        | "document"
        | "video"
        | "url"
        | "pdf"
        | "custom-text"
        | "reports"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      agent_status: ["active", "inactive", "pending"],
      agent_type: ["engagement", "sales"],
      call_sentiment: ["positive", "negative", "neutral"],
      call_status: ["completed", "pending", "missed", "canceled"],
      conversation_status_enum: [
        "completed",
        "in_progress",
        "scheduled",
        "canceled",
      ],
      conversation_type_enum: ["call", "whatsapp", "chat"],
      conversion_stage: [
        "interested",
        "in_progress",
        "converted",
        "not_interested",
      ],
      data_type: ["metaAds", "instagram"],
      entity_type_enum: ["vendor", "agent", "company"],
      evaluator_type_enum: ["ai", "human", "system"],
      message_type_enum: ["text", "image", "video", "audio", "file"],
      metric_type_enum: [
        "call_score",
        "response_time",
        "conversion_rate",
        "customer_satisfaction",
        "message_count",
        "conversation_count",
      ],
      opportunity_status: [
        "closed_won",
        "closed_lost",
        "qualified",
        "opportunity",
        "in_progress",
      ],
      report_period_enum: ["day", "week", "month", "year"],
      report_type_enum: [
        "performance",
        "engagement",
        "sales",
        "whatsapp",
        "calls",
        "vendor",
        "company",
        "overview",
        "content",
        "ads",
        "instagram",
        "vendorPerformance",
      ],
      schedule_frequency: ["daily", "weekly", "monthly", "custom", "never"],
      sender_type_enum: ["agent", "customer", "system"],
      sentiment_enum: ["positive", "neutral", "negative"],
      sentiment_type: ["positive", "neutral", "negative"],
      training_data_type: [
        "text",
        "image",
        "document",
        "video",
        "url",
        "pdf",
        "custom-text",
        "reports",
      ],
    },
  },
} as const
